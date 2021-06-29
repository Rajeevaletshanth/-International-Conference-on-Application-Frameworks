import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { FaRegFilePowerpoint, FaUser, FaUniversity } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdWork } from "react-icons/md";

export class KeynoteCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.state = {
      modal: false,
      modalProfile: false,
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  toggleProfile() {
    this.setState({ modalProfile: !this.state.modalProfile });
  }

  render() {
    return (
      <div>
        <div>
          <Card
            style={{
              borderRadius: "20px",
              backgroundColor: "#21012B",
              margin: "20px",
            }}
          >
            <CardImg
              top
              width="100%"
              src={this.props.workshop.workshop.workshopImage}
              alt="Card image cap"
              style={{ borderRadius: "20px" }}
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "white" }}>
                {this.props.workshop.workshop.workshopName}
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {this.props.workshop.workshop.date.substring(0, 10)}
              </CardSubtitle>
              <CardText style={{ color: "white" }}>
                {this.props.workshop.workshop.description}
              </CardText>

              <Button className="bg-transparent border-0">
                <a href={this.props.workshop.workshop.fileLink} target="_blank">
                  <FaRegFilePowerpoint color="white" fontSize="1.75em" />
                </a>
              </Button>

              <Button className="bg-transparent border-0" onClick={this.toggle}>
                <BsCalendar color="white" fontSize="1.5em" />
              </Button>

              <Button className="bg-transparent border-0" onClick={this.toggleProfile}>
                <CgProfile color="white" fontSize="1.7em" />
              </Button>
            </CardBody>
          </Card>
        </div>

        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              {" "}
              {this.props.workshop.workshop.workshopName}
            </ModalHeader>
            <ModalBody>
              <div>
                <h6>
                  <BsCalendar fontSize="1.5em" />{" "}
                  <span>
                    {" "}
                    {this.props.workshop.workshop.date.substring(0, 10)}
                  </span>
                </h6>
                <br />
                <h6>
                  <AiOutlineFieldTime fontSize="1.5em" />{" "}
                  <span>
                    {" "}
                    {this.props.workshop.workshop.timeFrom} To{" "}
                    {this.props.workshop.workshop.timeTo}
                  </span>
                </h6>
              </div>
            </ModalBody>
          </Modal>
        </div>

        <div>
          <Modal isOpen={this.state.modalProfile} toggle={this.toggleProfile}>
            <ModalHeader toggle={this.toggleProfile}>
              {" "}
              PRESENTER DETAILS
            </ModalHeader>
            <ModalBody>
              <div>
                <div>
                  <img
                    src={this.props.workshop.profileImg}
                    className="img-fluid"
                    alt="profilePic"
                  />
                </div>
                <br />
                <h6>
                  <FaUser fontSize="1.5em" />{" "}
                  <span>
                    {" "}
                    {this.props.workshop.firstName}{" "}
                    {" " + this.props.workshop.lastName}
                  </span>
                </h6>
                <br />
                <h6>
                  <MdWork fontSize="1.5em" />{" "}
                  <span> {this.props.workshop.jobStatus}</span>
                </h6>
                <br />
                <h6>
                  <FaUniversity fontSize="1.5em" />{" "}
                  <span> {this.props.workshop.universityOrWorkPlace}</span>
                </h6>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default KeynoteCard;
