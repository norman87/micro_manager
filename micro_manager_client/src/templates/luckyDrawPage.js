import React from "react";

class LuckyDrawPage extends React.Component {
  componentDidMount() {}

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
          <div className="col-6 border border-danger"></div>
        </div>
      </div>
    );
  }
}

export default LuckyDrawPage;
