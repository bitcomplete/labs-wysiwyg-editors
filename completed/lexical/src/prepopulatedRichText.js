import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text'
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical'
import { $createListItemNode, $createListNode } from '@lexical/list'
import { $createLinkNode } from '@lexical/link'
import { parseContentToNodes } from './parseContentToNodes'

export default function prepopulatedRichText() {
    const root = $getRoot()

    // Check if the root already has content
    if (root.getFirstChild() !== null) {
        return
    }

    root.append(...parseContentToNodes())

    // Create and append heading node
    const heading = $createHeadingNode('h1')
    heading.append($createTextNode('Welcome to the Vanilla JS Lexical Demo!'))
    root.append(heading)

    // Create and append quote node
    const quote = $createQuoteNode()
    quote.append(
        $createTextNode(
            `In case you were wondering what the text area at the bottom is – it's the debug view, showing the current state of the editor. `,
        ),
    )
    root.append(quote)

    // Create and append paragraph node with formatted text
    const paragraph = $createParagraphNode()
    paragraph.append(
        $createTextNode('This is a demo environment built with '),
        $createTextNode('lexical').toggleFormat('code'),
        $createTextNode('.'),
        $createTextNode(' Try typing in '),
        $createTextNode('some text').toggleFormat('bold'),
        $createTextNode(' with '),
        $createTextNode('different').toggleFormat('italic'),
        $createTextNode(' formats.'),
    )
    root.append(paragraph)
    const list = $createListNode('bullet')
    list.append(
        $createListItemNode().append(
            $createTextNode('Visit the '),
            $createLinkNode('https://lexical.dev/').append($createTextNode('Lexical website')),
            $createTextNode(' for documentation and more information.'),
        ),
        $createListItemNode().append(
            $createTextNode('Check out the code on our '),
            $createLinkNode('https://github.com/facebook/lexical').append(
                $createTextNode('GitHub repository'),
            ),
            $createTextNode('.'),
        ),
        $createListItemNode().append(
            $createTextNode('Playground code can be found '),
            $createLinkNode(
                'https://github.com/facebook/lexical/tree/main/packages/lexical-playground',
            ).append($createTextNode('here')),
            $createTextNode('.'),
        ),
        $createListItemNode().append(
            $createTextNode('Join our '),
            $createLinkNode('https://discord.com/invite/KmG4wQnnD9').append(
                $createTextNode('Discord Server'),
            ),
            $createTextNode(' and chat with the team.'),
        ),
    )
    root.append(list)
}
