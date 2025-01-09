import "trix";
import { parseContentToHTML } from '../../../scripts/parseContentToHtml.ts'

const editor = document.querySelector("trix-editor");
const hiddenInput = document.querySelector("#editor-content");

hiddenInput.value = parseContentToHTML()

editor.addEventListener("trix-change", () => {
  console.log("Editor content:", hiddenInput.value);
});
document.addEventListener("trix-initialize", function (e) {
  const editor = e.target;

  // Define custom attribute
  Trix.config.textAttributes.inlineCode = {
    tagName: "code",
    inheritable: true,
    parser: function (element) {
      return element.tagName.toLowerCase() === "code";
    },
  };
  Trix.config.textAttributes.underline = {
    tagName: "u",
    inheritable: true,
    parser: function (element) {
      const style = window.getComputedStyle(element);
      return (
        style.textDecoration === "underline" ||
        element.tagName.toLowerCase() === "u"
      );
    },
  };

  // Add a button click listener to apply the inline code attribute
  editor.toolbarElement
    .querySelector("[data-trix-action=inline-code]")
    ?.addEventListener("click", function () {
      const selection = editor.editor.getSelectedRange();
      if (!selection || selection[0] === selection[1]) {
        console.log("No text selected.");
        return;
      }

      if (editor.editor.attributeIsActive("inlineCode")) {
        editor.editor.deactivateAttribute("inlineCode");
      } else {
        editor.editor.activateAttribute("inlineCode");
      }
    });

  // Add a button click listener to apply the underline attribute
  editor.toolbarElement
    .querySelector("[data-trix-action=underline]")
    ?.addEventListener("click", function () {
      const selection = editor.editor.getSelectedRange();
      if (!selection || selection[0] === selection[1]) {
        console.log("No text selected.");
        return;
      }

      if (editor.editor.attributeIsActive("underline")) {
        editor.editor.deactivateAttribute("underline");
      } else {
        editor.editor.activateAttribute("underline");
      }
    });
});
