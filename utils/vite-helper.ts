/**
 * Function to get all HTML files in a given source directory and its subdirectories.
 * Returns an object with the relative path of each HTML file as key and the absolute path as value.
 * @param {string} srcDir
 */

import fs from 'fs'
import path from 'path'

export const getHtmlFiles = (srcDir: string): Record<string, string> => {
    const entry: Record<string, string> = {};
    function traverseDir(currentDir: string) {
        const files = fs.readdirSync(currentDir);

        files.forEach((file) => {
            const filePath = path.join(currentDir, file);
            const isDirectory = fs.statSync(filePath).isDirectory();

            if (isDirectory) {
                // If it's a directory, recursively traverse it
                traverseDir(filePath);
            } else if (path.extname(file) === '.html') {
                // If it's an HTML file, add it to the entry object
                const name = path.relative(srcDir, filePath).replace(/\/index\.html.*$/, '');
                entry[name] = filePath;
            }
        });
    }

    traverseDir(srcDir);

    return entry;
}
