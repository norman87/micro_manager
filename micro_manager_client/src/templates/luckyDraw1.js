import React from "react";
import tinyMCE from "tinymce";

class LuckyDraw1 extends React.Component {
  axiosUpdate = (URL, updateField, content) => {
    const axios = require("axios").default;

    axios
      .put(URL, {
        [updateField]: content
      })
      .then(function(response) {
        console.log(response);
      })
      .then(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    let that = this;

    tinyMCE.init({
      selector: ".editable-text",
      menubar: false,
      inline: true,
      toolbar: ["save"],
      plugins: ["quickbars", "save", "autosave"],
      // quickbars_insert_toolbar: "quickimage quicktable"
      quickbars_selection_toolbar:
        "bold italic underline | quicklink h2 h3 formatselect",
      save_onsavecallback: function(editor) {
        console.log("Saved content", editor.getContent());

        that.axiosUpdate(
          "http://localhost:3001/campaigns/48",
          "html_body",
          editor.getContent()
        );
      }
    });

    tinyMCE.init({
      selector: ".editable-image", // change this value according to your HTML
      plugins: ["image", "save", "autosave"],
      menubar: false,
      toolbar: ["image", "save"],
      inline: true,
      image_list: [
        {
          title: "Macs Logo",
          value:
            "https://d1nqx6es26drid.cloudfront.net/app/uploads/2019/11/05175538/McD_TheToken%C2%AE_1235_RGB.png"
        }
      ],
      save_onsavecallback: function(editor) {
        console.log("Saved content", editor.getContent());
        that.axiosUpdate(
          "http://localhost:3001/campaigns/48",
          "html_head",
          editor.getContent()
        );
      }
    });
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${"https://e4z6b5i3.stackpathcdn.com/wp-content/uploads/2015/03/Island-1.jpg"})`,
          height: "100vh"
        }}
      >
        <div className="row justify-content-center editable-image">
          <img
            src="data:image/png;base64,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"
            style={{ width: "20vw", margin: "3%" }}
          />
        </div>
        <div className="row align-items-center border border-primary editable-text">
          <div className="col-6 border border-danger">
            <div
              style={{
                height: "60vh",
                padding: "3%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 25
              }}
            >
              <h1>Stand a chance to win a million dollars!</h1>
              <br />
              <h2>Step 1:</h2>
              <h4>
                Buy a meal at one of our hundred over participating outlets!
              </h4>
              <br />
              <h2>Step 2:</h2>
              <h4>Retrieve the pin from the scratch card!</h4>
              <br />
              <h2>Step 3:</h2>
              <h4>Input your PIN number on the right</h4>
            </div>
          </div>
          <div className="col-6 border border-danger">2 of 2</div>
        </div>
      </div>
    );
  }
}

export default LuckyDraw1;
