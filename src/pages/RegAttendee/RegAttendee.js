import React, { Component } from "react";
import { storage } from "../../firebase";
import Progress from "../../common/ProgressBar/Progress";

import {
  Container,
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Navbar from "../../common/Navbar/Navbar";
import StripeCheckout from "../../common/StripePayment/StripeCheckout";
import Footer from "../../common/Footer/Footer";
import * as actions from "../../../actions/workshopActions"
import { connect } from "react-redux";

class RegAttendee extends Component {

  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.onValueChange = this.onValueChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
      contactNumber: "",
      jobStatus: "",
      imgLink:"",
      universityOrWorkPlace: "",
      statementOfInterest: "",
      workshops:[
        {
          workshopName:""
        }
      ],

      uploadPercentage: 0,

    };
  }

  componentDidMount() {
    this.props.fetchAllApprovedWorkshops();

  }

  uploadImage(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        processStatus: true,
        processStatusAlert: "alert alert-warning",
        processStatusMessage: "Image Uploading...",
      });
      const uploadTask = storage
        .ref(`attendee/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadPercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("attendee")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ imgLink: url });
              this.setState({
                processStatusAlert: "alert alert-success",
                processStatusMessage: "Image uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        processStatusAlert: "alert alert-danger",
        processStatusMessage: "Something went wrong",
      });
    }
  }

  handleCheckboxChange = (event) => {
    let singleWorkshop = {
      workshopName:event.target.value
    }
    if (event.target.checked) {
      if (!this.state.workshops.includes(singleWorkshop.workshopName)) {
        this.setState(prevState => ({ workshops: [...prevState.workshops, singleWorkshop]}))
      }
    } else {
      this.setState(prevState => ({ workshops: prevState.workshops.filter(day => day.workshopName !== singleWorkshop.workshopName) }));
    }
  }


  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <h3 className="text-center text-white mb-5">ATTENDEE REGISTRATION</h3>
          <Card>
            <CardBody className="p-5">
              <Form>
                <FormGroup>
                  {this.state.processStatus ? (
                    <div
                      className={this.state.processStatusAlert}
                      role="alert"
                    >
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="First Name" sm={2}>
                    First Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="Last Name " sm={2}>
                    Last Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="Last Name " sm={2}>
                    Contact number
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="tel"
                      name="contactNumber"
                      id="telephone"
                      placeholder="Enter the telephone number"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="jobstatus" sm={2}>
                    Job Status
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="jobStatus" id="jobstatus" onChange={(e) => {
                        this.onValueChange(e);
                      }}>
                      <option value="Professional">Professional</option>
                      <option value="Student">Student</option>
                      <option value="Industry expert">Industry expert</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Profile picture
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="file"
                      id="exampleFile"
                      onChange={(e) => {
                        this.uploadImage(e);
                      }}
                      required
                    />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>

                <FormGroup>
                  {this.state.processStatus ? (
                    <div
                      className={this.state.processStatusAlert}
                      role="alert"
                    >
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup row>
                  <Progress percentage={this.state.uploadPercentage} />
                </FormGroup>

                <FormGroup row>
                  <Label for="universityWorkplace" sm={2}>
                    University/Workplace
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="universityOrWorkPlace"
                      id="universityWorkplace"
                      placeholder="Enter the university or the workplace"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Statement of Interests
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="statementOfInterest" id="statementOfInterest" onChange={(e) => {
                      this.onValueChange(e);
                    }} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Select if you are attending{" "}
                  </Label>
                  <Col sm={{ size: 10 }}>
                    {this.props.approvedWorkshopList.map(singleWorkshop => {return(
                                          <FormGroup check>
                                          <Label check>
                                            <Input type="checkbox" id={singleWorkshop.workshop.workshopName} value={singleWorkshop.workshop.workshopName} onChange={ this.handleCheckboxChange}/> {singleWorkshop.workshop.workshopName}
                                          </Label>
                                        </FormGroup>
                    )})}
                  </Col>
                </FormGroup>
                <br />
              </Form>

              <Col sm={10}>
                <StripeCheckout role="ATTENDEE" amount="1000.00" firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} password={this.state.password}
                contactNumber={this.state.contactNumber} jobStatus={this.state.jobStatus} universityOrWorkPlace={this.state.universityOrWorkPlace} statementOfInterest={this.state.statementOfInterest} workshops={this.state.workshops} imgLink={this.state.imgLink} />
              </Col>
            </CardBody>
          </Card>
        </Container>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

const mapActionToProps = {
  fetchAllApprovedWorkshops: actions.fetchAllApprovedWorkshops,
};


const mapStateToProps = (state) => ({
  approvedWorkshopList: state.workshopReducer.approvedWorkshopList,
});

export default connect(mapStateToProps, mapActionToProps)(RegAttendee);
