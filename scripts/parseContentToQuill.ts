export const parseContentToQuill = () => {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerHTML : ''

    const output = [];
    let jsonObject;

    try {
        // Parse the innerHTML as JSON
        jsonObject = JSON.parse(jsonString)
    } catch (error) {
        console.error('Failed to parse editor content to Quill:', error)
        return 'Failed to load editor comments'
    }

    // Title
    if (jsonObject.title) {
        output.push({
            "attributes": {
                "bold": true
            },
            "insert": `${jsonObject.title}\n\n`
        });
    }

    // Overview
    if (jsonObject.overview) {
        output.push({
            "attributes": {
                "bold": true
            },
            "insert": `${jsonObject.overview}\n\n`
        });
    }

    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        output.push({
            "attributes": {
                "bold": true
            },
            "insert": "Advantages\n"
        });

        jsonObject.advantages.forEach((advantage: string) => {
            output.push({
                "insert": `${advantage}\n`,
                "attributes": {
                    "list": "bullet"
                  },
              });
        })
    }

    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        output.push({
            "attributes": {
                "bold": true
            },
            "insert": "\nDrawbacks\n"
        });

        jsonObject.drawbacks.forEach((drawback: string) => {
            output.push({
                "attributes": {
                    "list": "bullet"
                  },
                  "insert": `${drawback}\n`
            });
        })
    }


    // Conclusion
    if (jsonObject.conclusion) {
        output.push({
            "attributes": {
                "bold": true
            },
            "insert": `\n${jsonObject.conclusion}\n`
        });
    }

    output.push({
        "insert": "\n"
    })

    return output;
}
