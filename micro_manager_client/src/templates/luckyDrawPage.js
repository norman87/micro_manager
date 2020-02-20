import React from "react";
import axios from "axios";

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html_body: "", html_head: "" };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/campaigns/48")
      .then(response => {
        console.log(response);
        console.log("html-head" + response.data.html_head);
        console.log("html-body" + response.data.html_body);
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
          height: "100vh"
        }}
      >
        <div className="row justify-content-center editable-image">
          {/* html-head */}
          {this.state.html_head}
        </div>
        <div className="row align-items-center border border-primary editable-text">
          {/* html-body */}
          {this.state.html_body}
          {/* <div>
            <div className="col-6 border border-danger">
              {" "}
              <div
                style={{
                  height: "60vh",
                  padding: "3%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "25px"
                }}
              >
                {" "}
                <h1>Stand a chance to win a million dollarschgchgchg</h1> our
                hundred over participating outlets!
                <br /> <h2>Step 2:</h2>{" "}
                <h4>Retrieve the pin from the scratch card!</h4> <br />{" "}
                <h2>Step 3:</h2> <h4>Input your PIN number on the right</h4>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 border border-danger">2 of 2</div>
          </div> */}
          <div className="col-6 border border-danger"></div>
        </div>
      </div>
    );
  }
}

export default LuckyDrawPage;
