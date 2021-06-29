import React, {Component} from 'react'
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
    ModalBody
} from 'reactstrap';
import {FaRegFileWord, FaUniversity, FaUser} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {BsCalendar} from "react-icons/bs";
import {AiOutlineFieldTime} from "react-icons/ai";
import {MdWork} from "react-icons/md";


export class PaperCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.reasearchPaper)
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

                <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                    <CardBody>
                        <CardTitle tag="h5" style={{color:"white"}}>
                            {this.props.reasearchPaper.researchPaper.paperTitle}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {this.props.reasearchPaper.researchPaper.submittedDate.toString().substring(0,10)}
                        </CardSubtitle>

                        <CardText style={{color:"white"}}>
                            {this.props.reasearchPaper.researchPaper.description}
                        </CardText>

                        <Button className="bg-transparent border-0">
                            <a href={this.props.reasearchPaper.researchPaper.paperLink} target="_blank">
                            <FaRegFileWord color="white" fontSize="1.75em" />
                            </a>
                        </Button>


                        <Button className="bg-transparent border-0" onClick={this.toggleProfile}>
                            <CgProfile color="white" fontSize="1.7em" />
                        </Button>

                    </CardBody>

                </Card>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                            {" "}
                            {this.props.reasearchPaper.researchPaper.paperTitle}
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <h6>
                                    <BsCalendar fontSize="1.5em" />{" "}
                                    <span>
                                        {" "}
                                        {this.props.reasearchPaper.researchPaper.submittedDate.toString().substring(0,10)}
                                    </span>
                                </h6>
                                <br />

                            </div>
                        </ModalBody>
                    </Modal>
                </div>

                <div>
                    <Modal isOpen={this.state.modalProfile} toggle={this.toggleProfile}>
                        <ModalHeader toggle={this.toggleProfile}>
                            {" "}
                            REASEARCHER DETAILS
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <div>
                                    <img
                                        src={this.props.reasearchPaper.profileImg}
                                        className="img-fluid"
                                        alt="profilePic"
                                    />
                                </div>
                                <br />
                                <h6>
                                    <FaUser fontSize="1.5em" />{" "}
                                    <span>
                                         {" "}
                                        {this.props.reasearchPaper.firstName}{" "}
                                        {" " + this.props.reasearchPaper.lastName}
                                    </span>
                                </h6>
                                <br />
                                <h6>
                                    <MdWork fontSize="1.5em" />{" "}
                                    <span> {this.props.reasearchPaper.jobStatus}</span>
                                </h6>
                                <br />
                                <h6>
                                    <FaUniversity fontSize="1.5em" />{" "}
                                    <span> {this.props.reasearchPaper.universityOrWorkPlace}</span>
                                </h6>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>

        )
    }
}