export const parseContentToHTML = () => {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerHTML : ''

    if (!jsonString) {
        return '<p>No comments for this editor.</p>'
    }

    try {
        // Parse the innerHTML as JSON
        const jsonObject = JSON.parse(jsonString)
        let htmlContent = ''

        // Title
        if (jsonObject.title) {
            htmlContent += `<b>${jsonObject.title}</b>`
        }

        // Overview
        if (jsonObject.overview) {
            htmlContent += `<b>Overview</b><p>${jsonObject.overview}</p>`
        }

        // Advantages
        if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
            htmlContent += `<b>Advantages</b><ul>`
            jsonObject.advantages.forEach((advantage: string) => {
                htmlContent += `<li>${advantage}</li>`
            })
            htmlContent += `</ul>`
        }

        // Drawbacks
        if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
            htmlContent += `<b>Drawbacks</b><ul>`
            jsonObject.drawbacks.forEach((drawback: string) => {
                htmlContent += `<li>${drawback}</li>`
            })
            htmlContent += `</ul>`
        }

        // Conclusion
        if (jsonObject.conclusion) {
            htmlContent += `<b>Conclusion</b><p>${jsonObject.conclusion}</p>`
        }

        return htmlContent
    } catch (error) {
        console.error('Failed to parse editor content to HTML:', error)
        return 'Failed to load editor comments'
    }
}
