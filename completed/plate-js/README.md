### Plate JS repo for Labs-WYSIWYG project

This repo is a fork of the `vite-react-ts` template with Plate JS installed on top. There are multiple versions of Plate JS editor available for demo, each present inside `./src/pages` directory. Each folder inside `./src/pages` directory is bundled as a separate page by Vite.

### Development
1. Run `yarn` to install dependencies.
2. Run `yarn dev` to start the development server.

By default, the server opens full version of Plate JS `http://localhost:5173/pages/full/index.html`. You can change `full` to `basic` or any other version available inside `src/pages` to open other versions of Plate JS in local dev.

### Production
1. Run `yarn build` to build the project.

It will create a `dist` directory with all versions inside `pages/`, e.g. `dist/pages/full/index.html` and `dist/pages/basic/index.html`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
