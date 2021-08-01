module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "strict": "off",
        "no-console": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    "overrides": [
        {
          "files": ["./__tests__/gendiff.test.js" ],
          "rules": {
            "quotes": [ 2, "double" ]
          }
        }
      ]
};
