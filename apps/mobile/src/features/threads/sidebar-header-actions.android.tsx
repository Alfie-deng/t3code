import { View } from "react-native";

import { t } from "../../localization/zhCN";
import { T3HeaderButton } from "../../native/T3HeaderButton.android";
import type { SidebarHeaderActionsProps } from "./sidebar-header-actions";

export function SidebarHeaderActions(props: SidebarHeaderActionsProps) {
  return (
    <View className="h-11 flex-row gap-1">
      <T3HeaderButton
        accessibilityLabel={t("Open settings")}
        icon="gearshape"
        onPress={props.onOpenSettings}
      />
    </View>
  );
}
