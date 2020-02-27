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
          backgroundImage: `url(${this.state.background_image})`,
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
        >
          {/* <div className="col-6 ">
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
          <div className="col-6">
            <form
              className="form-inline"
              style={{
                padding: "3%",
                margin: "3%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 25
              }}
            >
              <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" className="sr-only">
                  Lucky Draw Pin
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Lucky Draw Pin"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </div>
    );
  }
}

export default LuckyDraw1;
