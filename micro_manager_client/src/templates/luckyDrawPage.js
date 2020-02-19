import React from "react";
import axios from "axios";

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html_body: "" };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/campaigns/48")
      .then(response => {
        console.log(response);
        console.log("html-head" + response.data.html_head);
        this.setState({
          html_body: response.data.html_body
        });
        console.log("html-body" + response.data.html_body);
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
          height: "100vh"
        }}
      >
        <div className="row justify-content-center editable-image">
          {/* html-head */}
        </div>
        <div className="row align-items-center border border-primary editable-text">
          {/* html-body */}
          {this.state.html_body}
          <div className="col-6 border border-danger"></div>
        </div>
      </div>
    );
  }
}

export default LuckyDrawPage;
