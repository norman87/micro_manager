import React from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function WinningModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">You Won!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function LosingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">You Lost!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html_body: "",
      html_head: "",
      background_image: "",
      winningModalShow: false,
      losingModalShow: false,
      lucky_string: ""
    };
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

        if (response.data.published === true) {
          this.setState({
            html_body: response.data.html_body,
            html_head: response.data.html_head,
            background_image: response.data.background_image,
            lucky_string: response.data.lucky_string
          });
        } else {
          this.setState({
            background_image:
              "https://miro.medium.com/max/4172/1*xq5XNsYLRG5cRWgGzJiPDg.png"
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let checkNumber = () => {
      let luckypin = document.getElementById("luckypin").value;
      if (luckypin == this.state.lucky_string) {
        this.setState({ winningModalShow: true });
      } else {
        this.setState({ losingModalShow: true });
      }
    };
    return (
      <fragment>
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
        <WinningModal
          show={this.state.winningModalShow}
          onHide={() => this.setState({ winningModalShow: false })}
        />
        <LosingModal
          show={this.state.losingModalShow}
          onHide={() => this.setState({ losingModalShow: false })}
        />
      </fragment>
    );
  }
}

export default LuckyDrawPage;
