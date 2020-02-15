import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

import simpleImage from "./simpleImage";

export default function Editorjs() {
  const editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holderId: "codex-editor",
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"]
      },
      list: {
        class: List,
        inlineToolbar: true
      },
      image: simpleImage,
      myOwnParagraph: Paragraph
    },
    initialBlock: "myOwnParagraph",
    data: {},
    onReady: () => {
      console.log("Editor.js is ready to work!");
    },
    onChange: () => {
      console.log("Now I know that Editor's content changed!");
    },
    autofocus: true,
    placeholder: "Let's start changing!",
    logLevel: "Error"
  });

  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
      /** Do anything you need after editor initialization */
    })
    .catch(reason => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  //saving data from Editor.js
  editor
    .save()
    .then(outputData => {
      console.log("Article data: ", outputData);
    })
    .catch(error => {
      console.log("Saving failed: ", error);
    });

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
      <div id="codex-editor">
        <h1>TEST</h1>
        <h2>Editor.js goes here</h2>
      </div>
    </>
  );
}
