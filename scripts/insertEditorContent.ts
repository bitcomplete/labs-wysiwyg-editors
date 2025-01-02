import { getHtmlFiles } from '../utils/vite-helper';
import fs from 'fs';

console.log("INSERTING EDITOR CONTENT");
const editorName = process.cwd().split('/').pop();
const htmlFiles = getHtmlFiles(`${process.cwd()}/src`);

const itemsPath = fs.realpathSync(`${process.cwd()}/../../items.json`);
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf-8'));

Object.entries(htmlFiles).forEach(([path, file]) => {
  const content = fs.readFileSync(file, 'utf8');
  // const variantName = path.split('/').pop();
  const item = items.find((item) =>  item.attributes.directorySlug === editorName);
  const newContent = item.copy?.editorContent;
  // const variant = item.attributes.variants.find(({ variantKey }) => variantKey === variantName);

  // TODO: parse the html, perhaps with node-html-parser, overwrite the inside of #editor-content with newContent, then write file back to disk

  console.log(`TODO: modify "${file}"`, newContent);
})
