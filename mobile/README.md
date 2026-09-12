# Hidden Gems – Mobile App (Capacitor)

Native Android wrapper around the Hidden Trails web app (`index.html` at the repo root).

## Requirements

- Node.js 18+
- Android Studio (with Android SDK, JDK 17)

## Build the APK

```bash
# 1. Install JS deps (once)
npm install

# 2. Keep the bundled web assets in sync with the repo-root index.html, then sync to Android
npm run sync

# 3. Open the Android project in Android Studio
#    - File -> Open -> select the `android/` folder inside this directory
#    - Wait for Gradle sync
#    - Build -> Build Bundle(s) / APK(s) -> Build APK(s)
#    APK output: android/app/build/outputs/apk/debug/app-debug.apk (or release)
```

Or build the release APK from the command line:

```bash
cd android
./gradlew assembleDebug           # debug APK
./gradlew assembleRelease         # release APK (unsigned unless a keystore is set up)
```

## Notes

- `npm run prepare:web` copies the root `index.html` into `www/` — run it whenever the site changes, then `npm run sync`.
- The app needs internet for maps (Leaflet), Firebase, and photo APIs — it is not a fully offline shell.
- Android location permissions are already declared in `AndroidManifest.xml` so the "Use my location" feature prompts at runtime.
- To publish to the Play Store you must sign a release build with your own keystore (see Android Studio "Generate Signed Bundle / APK").
- iOS is possible with the same setup on a macOS machine: `npm run add:ios && npm run sync`, then open `ios/` in Xcode.