
# duomo-property-manager-dubai

## To add Prettier and ESLint

Step 1: Install Prettier and ESLint

```sh
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier
```

Step 2: Initialize ESLint

```sh
npx eslint --init
```

You will be asked questions about your coding style, the environment (Node.js, browser, etc.), and whether you want to use a JavaScript module or CommonJS.

Step 3: Create Configuration Files

Create .eslintrc.js (or .eslintrc.json) for ESLint configuration:

```sh
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended', // Use prettier with ESLint
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Add custom rules here
    },
};
```

Create .prettierrc file for Prettier configuration:

```sh
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5"
}
```

Step 4: Add Scripts to package.json

```sh
"scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "lint:fix": "eslint . --fix"
}
```


Step 5: Run ESLint and Prettier

```sh
npm run lint:fix
```

To format your code with Prettier:

```sh
npm run format
```