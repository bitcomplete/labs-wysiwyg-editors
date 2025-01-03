import fs from 'fs';
import { parse } from 'node-html-parser';

import { getHtmlFiles } from '../utils/vite-helper';

const editorName = process.cwd().split('/').pop();
const htmlFiles = getHtmlFiles(`${process.cwd()}/src`);

const itemsPath = fs.realpathSync(`${process.cwd()}/../../items.json`);
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf-8'));

function updateEditorContent(file: string, items: any[]) {
  const content = fs.readFileSync(file, 'utf8');
  const item = items.find((item) =>  item.attributes.directorySlug === editorName);
  const newContent = item.copy?.editorContent;
  if (!newContent) {
    console.error(`No editor content found for ${file}`);
    return;
  }
  // const variantName = path.split('/').pop();
  // const variant = item.attributes.variants.find(({ variantKey }) => variantKey === variantName);

  let root;
  try {
    root = parse(content);
  } catch (error) {
    console.error(`Error parsing ${file} ${editorName}`, error);
    throw error;
  }

  const editorContent = root.querySelector('#editor-content-json');
  if (!editorContent) {
    console.error(`No editor content container found in ${file}`);
    return;
  }
  editorContent.set_content(JSON.stringify(newContent, null, 2));

  try {
    fs.writeFileSync(file, root.toString());
  } catch (error) {
    console.error(`Error writing ${file} ${editorName}`, error);
    throw error;
  }
}

if (Object.values(htmlFiles).length > 0) {
  Object.entries(htmlFiles).forEach(([path, file]) => {
    updateEditorContent(file, items);
  })
} else {
  // No variants, process just one file
  const file = `${process.cwd()}/index.html`
  updateEditorContent(file, items);
}
