#!/usr/bin/env bash
# t3code mobile iOS: apply Xcode 27 compatibility fixes after `expo prebuild`.
# prebuild regenerates ios/ each time, so run this before every xcodebuild.
# Usage: bash scripts/fix-ios-prebuild.sh [variant]
set -euo pipefail

cd "$(dirname "$0")/../apps/mobile/ios"

# 1. Raise deployment target so stale pods (12.x) satisfy Xcode 27 (>=15.0)
sed -i '' 's/"ios.deploymentTarget": "[^"]*"/"ios.deploymentTarget": "18.0"/' Podfile.properties.json

# 2. Bump every target in the app project to 18.0
find . -name "project.pbxproj" -maxdepth 3 -exec sed -i '' \
  -e 's/IPHONEOS_DEPLOYMENT_TARGET = 16\.4;/IPHONEOS_DEPLOYMENT_TARGET = 18.0;/g' \
  -e 's/IPHONEOS_DEPLOYMENT_TARGET = 17\.0;/IPHONEOS_DEPLOYMENT_TARGET = 18.0;/g' {} \;

# 3. Add post_install block that forces every pod target to 18.0 (if missing)
if ! grep -q "Xcode 27 rejects" Podfile; then
  python3 - <<'PY'
path = "Podfile"
s = open(path).read()
anchor = "    react_native_post_install("
idx = s.find(anchor)
if idx == -1:
    raise SystemExit("post_install anchor not found")
# find the closing "  end" after react_native_post_install(...) block
close = s.find("  end\n", idx)
if close == -1:
    raise SystemExit("post_install close not found")
insert = '''    # t3code: Xcode 27 rejects pods pinned to deployment targets below iOS 15.
    # Bump every pod target to the app's deployment target so stale pods build.
    app_deployment_target = podfile_properties['ios.deploymentTarget'] || '18.0'
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |build_config|
        build_config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = app_deployment_target
      end
    end
'''
s = s[:close] + insert + s[close:]
open(path, "w").write(s)
print("Podfile post_install patch applied")
PY
else
  echo "Podfile post_install patch already present"
fi

pod install --silent
echo "iOS prebuild fixes applied"
