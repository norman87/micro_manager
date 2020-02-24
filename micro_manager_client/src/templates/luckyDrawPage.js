import React from "react";
import axios from "axios";
import htmltojsx from "htmltojsx";

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html_body: "", html_head: "" };
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
        this.setState({
          html_body: response.data.html_body,
          html_head: response.data.html_head
        });
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

export default LuckyDrawPage;
