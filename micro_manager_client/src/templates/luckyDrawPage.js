import React from "react";
import axios from "axios";

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html_body: "", html_head: "", background_image: "" };
  }

  componentDidMount() {
    //html to jsx converter - NOT REQUIRED TO USE
    // let converter = new htmltojsx({
    //   createClass: false
    // });

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

        if (response.data.published == true) {
          this.setState({
            html_body: response.data.html_body,
            html_head: response.data.html_head,
            background_image: response.data.background_image
          });
          
        } 
        else {
          this.setState({
            background_image: "https://miro.medium.com/max/4172/1*xq5XNsYLRG5cRWgGzJiPDg.png"
          });
        }
      })
      .catch(function(error) {
        console.log(error);
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
        ></div>
      </div>
    );
  }
}

export default LuckyDrawPage;
