/**
 * Read-only projection of desktop ClientSettings model-list prefs.
 *
 * Desktop owns writes to `client-settings.json`. The server only reads and
 * watches that sibling file so remote clients (mobile) can mirror hidden /
 * order / favorites without a write-back path.
 */
import {
  ClientSettingsSchema,
  EMPTY_CLIENT_MODEL_LIST_PREFERENCES,
  type ClientModelListPreferences,
  type ClientSettings,
} from "@t3tools/contracts";
import { fromLenientJson } from "@t3tools/shared/schemaJson";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";

const ClientSettingsDocumentSchema = Schema.Struct({
  settings: ClientSettingsSchema,
});

const ClientSettingsJson = fromLenientJson(ClientSettingsSchema);
const LegacyClientSettingsDocumentJson = fromLenientJson(ClientSettingsDocumentSchema);
const decodeLegacyClientSettingsDocumentJson = Schema.decodeEffect(
  LegacyClientSettingsDocumentJson,
);
const decodeClientSettingsJsonValue = Schema.decodeEffect(ClientSettingsJson);

const decodeClientSettingsJson = (raw: string): Effect.Effect<ClientSettings, Schema.SchemaError> =>
  decodeLegacyClientSettingsDocumentJson(raw).pipe(
    Effect.map((document) => document.settings),
    Effect.catchTags({
      SchemaError: () => decodeClientSettingsJsonValue(raw),
    }),
  );

export const projectClientModelListPreferences = (
  settings: ClientSettings,
): ClientModelListPreferences => ({
  favorites: settings.favorites,
  providerModelPreferences: settings.providerModelPreferences,
});

export const clientSettingsPathForStateDir = (
  stateDir: string,
  join: (...parts: string[]) => string,
) => join(stateDir, "client-settings.json");

export const readClientModelListPreferences = (
  settingsPath: string,
): Effect.Effect<ClientModelListPreferences, never, FileSystem.FileSystem> =>
  Effect.gen(function* () {
    const fileSystem = yield* FileSystem.FileSystem;
    const raw = yield* fileSystem.readFileString(settingsPath).pipe(
      Effect.map(Option.some),
      Effect.catchTags({
        PlatformError: (cause) =>
          cause.reason._tag === "NotFound"
            ? Effect.succeed(Option.none<string>())
            : Effect.logWarning("Could not read client-settings for model list preferences.", {
                settingsPath,
                cause,
              }).pipe(Effect.as(Option.none<string>())),
      }),
    );

    if (Option.isNone(raw)) {
      return EMPTY_CLIENT_MODEL_LIST_PREFERENCES;
    }

    return yield* decodeClientSettingsJson(raw.value).pipe(
      Effect.map(projectClientModelListPreferences),
      Effect.catchTags({
        SchemaError: (cause) =>
          Effect.logWarning("Could not decode client-settings for model list preferences.", {
            settingsPath,
            cause,
          }).pipe(Effect.as(EMPTY_CLIENT_MODEL_LIST_PREFERENCES)),
      }),
    );
  });

/**
 * Emits the latest projection whenever `client-settings.json` changes.
 * Does not emit an initial value — callers load once separately.
 */
export const watchClientModelListPreferences = (
  settingsPath: string,
): Stream.Stream<ClientModelListPreferences, never, FileSystem.FileSystem | Path.Path> =>
  Stream.unwrap(
    Effect.gen(function* () {
      const fileSystem = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const settingsDir = path.dirname(settingsPath);
      const settingsFile = path.basename(settingsPath);
      const settingsPathResolved = path.resolve(settingsPath);

      yield* fileSystem.makeDirectory(settingsDir, { recursive: true }).pipe(
        Effect.catch((cause) =>
          Effect.logWarning("Could not prepare client-settings directory for watch.", {
            settingsPath,
            cause,
          }),
        ),
      );

      return fileSystem.watch(settingsDir).pipe(
        Stream.filter((event) => {
          return (
            event.path === settingsFile ||
            event.path === settingsPath ||
            path.resolve(settingsDir, event.path) === settingsPathResolved
          );
        }),
        Stream.debounce(Duration.millis(100)),
        Stream.mapEffect(() => readClientModelListPreferences(settingsPath)),
        Stream.ignoreCause({ log: true }),
      );
    }),
  );
