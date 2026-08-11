import * as NodeServices from "@effect/platform-node/NodeServices";
import { DEFAULT_CLIENT_SETTINGS, ProviderInstanceId } from "@t3tools/contracts";
import { describe, expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";

import {
  projectClientModelListPreferences,
  readClientModelListPreferences,
} from "./clientModelListPreferences.ts";

describe("clientModelListPreferences", () => {
  it("projects favorites and provider model preferences only", () => {
    const projected = projectClientModelListPreferences({
      ...DEFAULT_CLIENT_SETTINGS,
      favorites: [{ provider: ProviderInstanceId.make("cursor"), model: "composer-2" }],
      providerModelPreferences: {
        [ProviderInstanceId.make("cursor")]: {
          hiddenModels: ["claude-opus-5"],
          modelOrder: ["composer-2"],
        },
      },
    });

    expect(projected).toEqual({
      favorites: [{ provider: "cursor", model: "composer-2" }],
      providerModelPreferences: {
        cursor: {
          hiddenModels: ["claude-opus-5"],
          modelOrder: ["composer-2"],
        },
      },
    });
  });

  it.effect("reads empty preferences when the file is missing", () =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const dir = yield* fs.makeTempDirectoryScoped({ prefix: "client-model-prefs-" });
      const settingsPath = path.join(dir, "client-settings.json");

      const preferences = yield* readClientModelListPreferences(settingsPath);
      expect(preferences).toEqual({
        favorites: [],
        providerModelPreferences: {},
      });
    }).pipe(Effect.provide(NodeServices.layer)),
  );

  it.effect("reads favorites and hidden models from client-settings.json", () =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const dir = yield* fs.makeTempDirectoryScoped({ prefix: "client-model-prefs-" });
      const settingsPath = path.join(dir, "client-settings.json");
      yield* fs.writeFileString(
        settingsPath,
        JSON.stringify({
          favorites: [{ provider: "cursor", model: "composer-2" }],
          providerModelPreferences: {
            cursor: {
              hiddenModels: ["claude-opus-5"],
              modelOrder: [],
            },
          },
        }),
      );

      const preferences = yield* readClientModelListPreferences(settingsPath);
      expect(preferences.favorites).toEqual([{ provider: "cursor", model: "composer-2" }]);
      expect(preferences.providerModelPreferences.cursor?.hiddenModels).toEqual(["claude-opus-5"]);
    }).pipe(Effect.provide(NodeServices.layer)),
  );
});
