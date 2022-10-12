# How to prepare a project for testing

Install jest and jest-expo with:

```bash
npm install --save-dev jest jest-expo
```

Install @testing-library/jest-native and @testing-library/jest-native with:

```bash
npm install --save-dev @testing-library/jest-native @testing-library/jest-native
```

This might have trouble resolving, in which case use the --legacy-peer-deps flag

```bash
npm install --save-dev @testing-library/react-native @testing-library/jest-native --legacy-peer-deps
```

Add the config block to `package.json`

```json
 "jest": {
    "preset": "jest-expo",
    "testPathIgnorePatterns": [
      "solutions"
    ],
    "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
  }
```

Add a test command to your scripts block:

```json
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest"
	}
```

and you're ready to go!