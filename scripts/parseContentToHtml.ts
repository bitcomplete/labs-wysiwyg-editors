export const END_OF_DEVELOPER_COMMENTS = "------ End of Developer's Comments ------"

export const parseContentToHTML = () => {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerText : ''

    const DEFAULT_CONTENT = 'This is editable content.'

    if (!jsonString) {
        return DEFAULT_CONTENT
    }

    // Parse the innerHTML as JSON
    let jsonObject
    try {
        jsonObject = JSON.parse(jsonString)
    } catch (error) {
        console.error('Failed to parse editor content to HTML:', error)
        return DEFAULT_CONTENT
    }

    let htmlContent = ''

    // Title
    if (jsonObject.title) {
        htmlContent += `<p><b>${jsonObject.title}</b></p>`
    }

    // Overview
    if (jsonObject.overview) {
        htmlContent += `<p><b>Overview</b><p>${jsonObject.overview}</p></p>`
    }

    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        htmlContent += `<p><b>Advantages</b></p><ul>`
        jsonObject.advantages.forEach((advantage: string) => {
            htmlContent += `<li>${advantage}</li>`
        })
        htmlContent += `</ul>`
    }

    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        htmlContent += `<p><b>Drawbacks</b></p><ul>`
        jsonObject.drawbacks.forEach((drawback: string) => {
            htmlContent += `<li>${drawback}</li>`
        })
        htmlContent += `</ul>`
    }

    // Conclusion
    if (jsonObject.conclusion) {
        htmlContent += `<p><b>Conclusion</b></p><p>${jsonObject.conclusion}</p>`
    }

    htmlContent += `<p>${END_OF_DEVELOPER_COMMENTS}</p>`

    return htmlContent
}
