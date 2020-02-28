import React from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import winningSound from "../sounds/tada.flac";
import losingSound from "../sounds/sad.mp3";

class LuckyDrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html_body: "",
      html_head: "",
      background_image: "",
      winningModalShow: false,
      losingModalShow: false,
      lucky_string: "",
      winning_message: "",
      losing_message: ""
    };
  }

  componentDidMount() {
    let queryParams = window.location.hash.split("?").pop();
    let params = new URLSearchParams(queryParams);
    let paramsId = params.get("id");

    axios
      .get("http://localhost:3001/campaigns/" + paramsId)
      .then(response => {
        console.log(response);

        if (response.data.published === true) {
          this.setState({
            html_body: response.data.html_body,
            html_head: response.data.html_head,
            background_image: response.data.background_image,
            lucky_string: response.data.lucky_string,
            winning_message: response.data.winning_message,
            losing_message: response.data.losing_message
          });
        } else {
          this.setState({
            background_image:
              "https://miro.medium.com/max/4172/1*xq5XNsYLRG5cRWgGzJiPDg.png"
          });
          document.getElementById("luckydrawcomponent").style.visibility =
            "hidden";
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let checkNumber = event => {
      event.preventDefault();
      let luckypin = document.getElementById("luckypin").value;
      let winSound = new Audio(winningSound);
      let loseSound = new Audio(losingSound);

      if (luckypin == this.state.lucky_string) {
        this.setState({ winningModalShow: true });
        winSound.play();
      } else {
        this.setState({ losingModalShow: true });
        loseSound.play();
      }
    };

    let LosingModal = props => {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Try Again!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.losing_message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };

    let WinningModal = props => {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              You Won!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.winning_message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
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
          <div className="row align-items-center">
            <div
              className="col-6 editable-text"
              dangerouslySetInnerHTML={{ __html: this.state.html_body }}
            ></div>
            <div className="col-6" id="luckydrawcomponent">
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
                  <label for="luckypin" className="sr-only">
                    Lucky Draw Pin
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="luckypin"
                    placeholder="Lucky Draw Pin"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={checkNumber}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
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
