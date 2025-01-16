import { BITCOMPLETE_ATTRIBUTION_LINK } from "./constants";
export const END_OF_DEVELOPER_COMMENTS = "Preview more features below:";
export const parseContentToHTML = (withEndOfDeveloperComments = true) => {
    const editorContentElement = document.getElementById('editor-content-json');
    const jsonString = editorContentElement ? editorContentElement.innerText : '';
    const DEFAULT_CONTENT = 'This is editable content.';
    if (!jsonString) {
        return DEFAULT_CONTENT;
    }
    // Parse the innerHTML as JSON
    let jsonObject;
    try {
        jsonObject = JSON.parse(jsonString);
    }
    catch (error) {
        console.error('Failed to parse editor content to HTML:', error);
        return DEFAULT_CONTENT;
    }
    let htmlContent = '';
    // Title
    if (jsonObject.title) {
        htmlContent += `<p><b>${jsonObject.title}</b> - by <a href="${BITCOMPLETE_ATTRIBUTION_LINK}" target="_blank">Bit Complete</a></p>`;
    }
    // Overview
    if (jsonObject.overview) {
        htmlContent += `<p><b>Overview</b></p><p>${jsonObject.overview}</p>`;
    }
    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        htmlContent += `<p><b>Advantages</b></p><ul>`;
        jsonObject.advantages.forEach((advantage) => {
            htmlContent += `<li>${advantage}</li>`;
        });
        htmlContent += `</ul>`;
    }
    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        htmlContent += `<p><b>Drawbacks</b></p><ul>`;
        jsonObject.drawbacks.forEach((drawback) => {
            htmlContent += `<li>${drawback}</li>`;
        });
        htmlContent += `</ul>`;
    }
    // Conclusion
    if (jsonObject.conclusion) {
        htmlContent += `<p><b>Conclusion</b></p><p>${jsonObject.conclusion}</p>`;
    }
    if (withEndOfDeveloperComments) {
        htmlContent += `<p><b>${END_OF_DEVELOPER_COMMENTS}</b></p>`;
    }
    return htmlContent;
};
