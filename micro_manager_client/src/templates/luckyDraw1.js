import React from "react";
import tinyMCE from "tinymce";
import axios from "axios";

class LuckyDraw1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html_body: "", html_head: "", background_image: "" };
  }

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

    let queryParams = window.location.hash.split("?").pop();
    let params = new URLSearchParams(queryParams);
    let paramsId = params.get("id");

    axios
      .get("http://localhost:3001/campaigns/" + paramsId)
      .then(response => {
        console.log(response);
        // console.log("html-head" + response.data.html_head);
        // console.log(
        //   "html-head in JSX" + converter.convert(response.data.html_head)
        // );
        // console.log("html-body" + response.data.html_body);
        this.setState({
          html_body: response.data.html_body,
          html_head: response.data.html_head,
          background_image: response.data.background_image
        });
      })
      .catch(function(error) {
        console.log(error);
      });

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
          "http://localhost:3001/campaigns/" + paramsId,
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
        console.log("Saved body", editor.getBody());
        console.log("Saved container", editor.getContainer());
        console.log("Saved doc", editor.getDoc());
        that.axiosUpdate(
          "http://localhost:3001/campaigns/" + paramsId,
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      >
        <div
          className="row justify-content-center editable-image"
          dangerouslySetInnerHTML={{ __html: this.state.html_head }}
        ></div>
        <div
          className="row align-items-center editable-text"
          dangerouslySetInnerHTML={{ __html: this.state.html_body }}
        ></div>
      </div>
    );
  }
}

export default LuckyDraw1;
