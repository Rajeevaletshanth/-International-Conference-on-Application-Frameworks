import React, { Component } from "react";
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
import {storage} from "../../firebase";
import Progress from "../../common/ProgressBar/Progress";
import * as actions from "../../../actions/authActions";
import * as workshopActions from "../../../actions/workshopActions";
import {connect} from "react-redux";

class RegRearseacher extends Component {

  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.onValueChange = this.onValueChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.state ={
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      jobStatus:"",
      universityOrWorkPlace:"",
      statementOfInterest:"",
      contactNumber:"",
      paid:"",
      profileImg: "",
      paperTitle: "",
      description: "",
      submittedDate: "",
      paperLink: "",
      approved:"",

      workshops:[
        {
          workshopName:""
        }
      ],

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",

      profileProcessStatus: false,
      profileProcessStatusAlert: "",
      profileProcessStatusMessage: "",

      fileProcessStatus: false,
      fileProcessStatusAlert: "",
      fileProcessStatusMessage: "",

      uploadProfilePercentage: 0,
      uploadFilePercentage: 0,
    }
  }

  componentDidMount() {
    this.props.fetchAllApprovedWorkshops();

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
      statementOfInterest:this.state.statementOfInterest,
      profileImg: this.state.profileImg,
      paid:false,
      workshopAttends :this.state.workshops,
      researchPaper: {
        paperTitle: this.state.paperTitle,
        description: this.state.description,
        paperLink: this.state.fileLink,
        submittedDate: new Date(),
        approved: false,
      },

    };


    this.props.researcherRegister(
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
          .ref(`researchpaper/${e.target.files[0].name}`)
          .put(e.target.files[0]);
      uploadTask.on(
          "state_changed",
          (snapshot) => {
            //progress function
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ uploadFilePercentage: progress });
          },
          (error) => {
            //error function
            console.log(error);
          },
          () => {
            //complete function
            storage
                .ref("researchpaper")
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

  uploadImage(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        profileProcessStatus: true,
        profileProcessStatusAlert: "alert alert-warning",
        profileProcessStatusMessage: "Image Uploading...",
      });
      const uploadTask = storage
          .ref(`researcher/${e.target.files[0].name}`)
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
                .ref("researcher")
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
            RESEARCHER REGISTRATION
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
                      onChange={(e) => {this.onValueChange(e);}}
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
                      onChange={(e) => {this.onValueChange(e);}}
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
                      onChange={(e) => {this.onValueChange(e);}}
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
                      onChange={(e) => {this.onValueChange(e);}}
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
                      onChange={(e) => {this.onValueChange(e);}}
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="jobstatus" sm={2}>
                    Job Status
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="jobStatus" id="jobstatus" onChange={(e) => {this.onValueChange(e);}} required>
                      <option unselectable>Select Job Status</option>
                      <option value="Professional">Professional</option>
                      <option value="Student">Student</option>
                      <option value="Industry Expert">Industry expert</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Profile picture
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" onChange={(e) => {this.uploadImage(e);}} required/>
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
                      id="universityWorkplace"
                      placeholder="Enter the university or the workplace"
                      onChange={(e) => {this.onValueChange(e);}}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Statement of Interests
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="statementOfInterest" id="exampleText" onChange={(e) => {this.onValueChange(e);}}/>
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
            </CardBody>
          </Card>
        </Container>

        <Container className="mt-5">
          <Card>
            <CardBody className="p-5">
              <Form onSubmit={this.onRegister}>
                <FormGroup row>
                  <Label for="PaperTitle" sm={2}>
                    Paper Title
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="paperTitle"
                      id="paperTitle"
                      placeholder="Enter the paper title"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Wordfile
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" onChange={(e) => {
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
                      percentage={this.state.uploadFilePercentage}
                  />
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Description
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textare"
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
  researcherRegister: actions.ReasearcherRegister,
  fetchAllApprovedWorkshops: workshopActions.fetchAllApprovedWorkshops,

};


const mapStateToProps = (state) => ({
  approvedWorkshopList: state.workshopReducer.approvedWorkshopList,
});

export default connect(mapStateToProps, mapActionToProps)(RegRearseacher);
