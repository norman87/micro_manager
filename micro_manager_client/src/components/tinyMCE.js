import React from "react";
import tinyMCE from "tinymce";

class TinyMCE extends React.Component {
  componentDidMount() {
    const dfreeHeaderConfig = {
      selector: ".dfree-header",
      menubar: false,
      inline: true,
      toolbar: "save",
      plugins: ["quickbars", "save"],
      quickbars_insert_toolbar: "undo redo",
      quickbars_selection_toolbar: "italic underline | formatselect"
    };

    const dfreeBodyConfig = {
      selector: "div.dfree-body",
      menubar: false,
      inline: true,
      plugins: [
        "autolink",
        "codesample",
        "link",
        "lists",
        "media",
        // "powerpaste",
        "table",
        "image",
        "quickbars",
        "codesample",
        "help"
      ],
      toolbar: false,
      quickbars_insert_toolbar: "quicktable image media codesample",
      quickbars_selection_toolbar:
        "bold italic underline | formatselect | blockquote quicklink",
      contextmenu:
        "undo redo | inserttable | cell row column deletetable | help"
      //   powerpaste_word_import: "clean",
      //   powerpaste_html_import: "clean"
    };

    // tinyMCE.init({
    //   selector: "div.tinymce",
    //   plugins: ["quickbars"],
    //   toolbar: false,
    //   menubar: false,
    //   inline: true
    // });

    tinyMCE.init(dfreeHeaderConfig);
    tinyMCE.init(dfreeBodyConfig);

    tinyMCE.activeEditor.execCommand("mceCancel");
    tinyMCE.activeEditor.execCommand("mceSave");
  }

  render() {
    return (
      <div>
        <h1 class="dfree-header">LUCKY DRAW CAMPAIGN</h1>

        <br />
        <div id="dfree-body" class="dfree-body ">
          <img src="https://forums-images.oneplus.net/attachments/428/428318-39a245db4de4dc48e6f84c5a8d0e409c.png"></img>
          <br />
          <h2>The world’s first rich text editor in the cloud</h2>
          <p>Coming Soon</p>
        </div>
      </div>
    );
  }
}

export default TinyMCE;
