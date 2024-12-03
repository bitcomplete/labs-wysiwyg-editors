# Labs: WYSIWYG Editors

This repository contains a JSON file (see `items.json`) which lists WYSIWYG
editors (or rich text editors). It includes demo files to preview what these
editors look like once they've been instantiated / setup.

[https://wysiwyg-editors.com/](https://wysiwyg-editors.com/) makes use of this
library to help developers choose between different editors.

Feel free to use this data (licensed under MIT) for your own projects (and
submit a PR to this `README.md` file so we can link to your project).

[Bit Complete Inc.](https://bitcomplete.io/)

## What's inside?

This Turborepo includes the following packages and apps:

- `PlateJS` - complete
- `Lexical` - complete
- `TinyMCE` - complete
- `CKEditor 5` - complete
- `TipTap` - complete
- `Trix` - complete
- `Editor.js` - complete
- `SlateJS` - complete
- `ProseMirror` - complete
- `Quill` - complete

They are divided into 2 parent directories - `todo/` & `complete/`. As the name suggests, working examples are under `complete/`

### Build

Run `yarn build` to build all monorepos under `complete/` directory

### Development

To get started with a new editor, navigate to the directory `complete/` and run the following command to initialize a new React + TS + Vite JS project:

```bash
yarn create vite my-editor --template react-ts
```

Once done, make sure to delete the completed editor's directory from `/todo`
