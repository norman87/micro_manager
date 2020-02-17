import React from "react";
import tinyMCE from "tinymce";

class LuckyDraw1 extends React.Component {
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
        "help",
        "save"
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

    // tinyMCE.activeEditor.execCommand("mceCancel");
    // tinyMCE.activeEditor.execCommand("mceSave");
  }
  render() {
    return (
      <div
        class="fdb-block"
        style={{
          backgroundImage: `url("https://rocketleague.media.zestyio.com/rl_ll_logo.png")`
        }}
      >
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-12 col-md-9 col-lg-8">
              <div class="fdb-box fdb-touch">
                <div class="row justify-content-center">
                  <div class="col-12 col-lg-10">
                    <h1>Subscribe</h1>
                    <p class="lead">
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove.
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center mt-4">
                  <div class="col-12 col-lg-10">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your email address"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LuckyDraw1;
