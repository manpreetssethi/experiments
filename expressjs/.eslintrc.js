const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "@wetransfer/wetransfer",
    "@wetransfer/wetransfer/react"
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve("./webpack.config.dev.js")
      }
    }
  },
  "rules": {
    // Imports
    "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
    // A11Y, for now all existing errors are reverted to warnings
    "jsx-a11y/alt-text": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/iframe-has-title": 1,
    "jsx-a11y/label-has-for": 1,
    "jsx-a11y/media-has-caption": 1,
    "jsx-a11y/mouse-events-have-key-events": 1,
    "jsx-a11y/no-autofocus": 1,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/tabindex-no-positive": 1
  },
  "globals": {
    "__DEV__": true,
    "__dirname": true,
    "__WALLPAPER_DEV_ENABLED__": true,
    "createMocks": true,
    "mountComponent": true,
    "ga": true,
    "global": true,
    "jsdom": true,
    "mockDate": true,
    "module": true,
    "process": true,
    "RealDate": true,
    "renderSnapshot": true,
    "trackJs": true,
    "createPageContainer": true
  }
};
