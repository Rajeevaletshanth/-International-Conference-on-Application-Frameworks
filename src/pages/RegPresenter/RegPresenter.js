import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/authActions";
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
import Footer from "../../common/Footer/Footer";

class RegPresenter extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadWorkshopImage = this.uploadWorkshopImage.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobStatus: "",
      universityOrWorkPlace: "",
      contactNumber: "",
      profileImg: "",
      workshopName: "",
      workshopImage: "",
      description: "",
      timeTo: "",
      timeFrom: "",
      date: "",
      fileLink: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",

      profileProcessStatus: false,
      profileProcessStatusAlert: "",
      profileProcessStatusMessage: "",

      workshopImageProcessStatus: false,
      workshopImageProcessStatusAlert: "",
      workshopImageProcessStatusMessage: "",

      fileProcessStatus: false,
      fileProcessStatusAlert: "",
      fileProcessStatusMessage: "",

      uploadProfilePercentage: 0,
      uploadWorkshopImagePercentage: 0,
      uploadWorkshopFilePercentage: 0,
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRegister(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const registerPresenterObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      jobStatus: this.state.jobStatus,
      universityOrWorkPlace: this.state.universityOrWorkPlace,
      contactNumber: this.state.contactNumber,
      profileImg: this.state.profileImg,
      workshop: {
        workshopName: this.state.workshopName,
        workshopImage: this.state.workshopImage,
        description: this.state.description,
        timeTo: this.state.timeTo,
        timeFrom: this.state.timeFrom,
        date: this.state.date,
        fileLink: this.state.fileLink,
        submittedDate: new Date(),
        approved: false,
      },
    };

    this.props.presenterRegister(
      registerPresenterObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Register successful",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage:
            "Something went wrong. Please with different email.",
        });
      }
    );
  }

  uploadFile(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        fileProcessStatus: true,
        fileProcessStatusAlert: "alert alert-warning",
        fileProcessStatusMessage: "File Uploading...",
      });
      const uploadTask = storage
        .ref(`workshopfile/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadWorkshopFilePercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("workshopfile")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ fileLink: url });
              this.setState({
                fileProcessStatusAlert: "alert alert-success",
                fileProcessStatusMessage: "File uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        fileProcessStatusAlert: "alert alert-danger",
        fileProcessStatusMessage: "Something went wrong",
      });
    }
  }

  uploadWorkshopImage(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        workshopImageProcessStatus: true,
        workshopImageProcessStatusAlert: "alert alert-warning",
        workshopImageProcessStatusMessage: "Image Uploading...",
      });
      const uploadTask = storage
        .ref(`workshopimages/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadWorkshopImagePercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("workshopimages")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ workshopImage: url });
              this.setState({
                workshopImageProcessStatusAlert: "alert alert-success",
                workshopImageProcessStatusMessage:
                  "Image uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        workshopImageProcessStatusAlert: "alert alert-danger",
        workshopImageProcessStatusMessage: "Something went wrong",
      });
    }
  }

  uploadImage(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        profileProcessStatus: true,
        profileProcessStatusAlert: "alert alert-warning",
        profileProcessStatusMessage: "Image Uploading...",
      });
      const uploadTask = storage
        .ref(`presenter/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadProfilePercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("presenter")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ profileImg: url });
              this.setState({
                profileProcessStatusAlert: "alert alert-success",
                profileProcessStatusMessage: "Image uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        profileProcessStatusAlert: "alert alert-danger",
        profileProcessStatusMessage: "Something went wrong",
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <h3 className="text-center text-white mb-5">
            PRESENTER REGISTRATION
          </h3>
          <Card>
            <CardBody className="p-5">
              <Form>
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
                      required
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
                      required
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
                      id="contactNumber"
                      placeholder="Enter the telephone number"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
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
                      required
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
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="jobstatus" sm={2}>
                    Job Status
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="select"
                      name="jobStatus"
                      id="jobStatus"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    >
                      <option unselectable>Select Job Status</option>
                      <option value="Professional">Professional</option>
                      <option value="Student">Student</option>
                      <option value="Industry Expert">Industry Expert</option>
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
                  {this.state.profileProcessStatus ? (
                    <div
                      className={this.state.profileProcessStatusAlert}
                      role="alert"
                    >
                      {this.state.profileProcessStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup row>
                  <Progress percentage={this.state.uploadProfilePercentage} />
                </FormGroup>

                <FormGroup row>
                  <Label for="universityWorkplace" sm={2}>
                    University/Workplace
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="universityOrWorkPlace"
                      id="universityOrWorkPlace"
                      placeholder="Enter the university or the workplace"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Container>

        <Container className="mt-5">
          <Card>
            <CardBody className="p-5">
              <Form onSubmit={this.onRegister}>
                <FormGroup row>
                  <Label for="WorkshopName" sm={2}>
                    Workshop Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="workshopName"
                      id="workshopName"
                      placeholder="Enter workshop name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Workshop Banner
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="file"
                      id="exampleFile"
                      onChange={(e) => {
                        this.uploadWorkshopImage(e);
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
                  {this.state.workshopImageProcessStatus ? (
                    <div
                      className={this.state.workshopImageProcessStatusAlert}
                      role="alert"
                    >
                      {this.state.workshopImageProcessStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup row>
                  <Progress
                    percentage={this.state.uploadWorkshopImagePercentage}
                  />
                </FormGroup>

                <FormGroup row>
                  <Label for="date" sm={2}>
                    Date
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="timeFrom" sm={2}>
                    Starting time
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="time"
                      name="timeFrom"
                      id="timeFrom"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="timeTo " sm={2}>
                    Ending time
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="time"
                      name="timeTo"
                      id="timeTo"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="file"
                      id="exampleFile"
                      onChange={(e) => {
                        this.uploadFile(e);
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
                  {this.state.fileProcessStatus ? (
                    <div
                      className={this.state.fileProcessStatusAlert}
                      role="alert"
                    >
                      {this.state.fileProcessStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup row>
                  <Progress
                    percentage={this.state.uploadWorkshopFilePercentage}
                  />
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Description
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Enter description"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button className="btn btn-warning" type="submit">
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
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
  presenterRegister: actions.presenterRegister,
};

export default connect(null, mapActionToProps)(RegPresenter);
