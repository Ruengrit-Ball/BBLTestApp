# BBLTestApp

Nx monorepo (pnpm) with a React Native app at `apps/mobile`.

## Setup

```sh
pnpm install
```

iOS only — install CocoaPods once before the first run:

```sh
npx nx pod-install @bbltest-app/mobile
```

## Run

```sh
# iOS simulator
npx nx run-ios @bbltest-app/mobile

# Android emulator
npx nx run-android @bbltest-app/mobile

# Metro bundler only
npx nx start @bbltest-app/mobile

# Web (Vite)
npx nx serve @bbltest-app/mobile
```

## Test / Lint / Typecheck

```sh
npx nx test @bbltest-app/mobile
npx nx lint @bbltest-app/mobile
npx nx typecheck @bbltest-app/mobile

# or all at once
npx nx run-many -p @bbltest-app/mobile -t test lint typecheck
```

## Structure

```
apps/mobile/
  src/app/App.tsx        # app entry component
  src/app/App.spec.tsx   # example test (@testing-library/react-native)
  ios/  android/         # native projects
```

Key libraries already installed: `@react-navigation/native` + `native-stack`,
`react-native-safe-area-context`, `react-native-screens`, `axios`, `zustand`,
`react-native-svg`.
