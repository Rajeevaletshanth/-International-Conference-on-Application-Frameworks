import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/authActions";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import regImg from "url:../../assets/regImg.svg";

class RegAdmin extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
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

    const registerAdminObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.adminRegister(
      registerAdminObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Register successful",
        });
        window.location = "/admin";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong. Please try again.",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <h3 className="text-center text-white mb-5">ADMIN REGISTRATION</h3>
          <Card>
            <CardBody className="p-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 container">
                  <img src={regImg} alt="regImg" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 container">
                  <Form onSubmit={this.onRegister}>
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
                      <Label for="First Name" sm={12}>
                        First Name
                      </Label>
                      <Col sm={10}>
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
                      <Label for="Last Name " sm={12}>
                        Last Name
                      </Label>
                      <Col sm={10}>
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
                      <Label for="email" sm={12}>
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
                      <Label for="password" sm={12}>
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
                      <Col sm={12}>
                        <Button className="btn btn-warning" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>

        <br />

        <Footer />
      </div>
    );
  }
}

const mapActionToProps = {
  adminRegister: actions.adminRegister,
};

export default connect(null, mapActionToProps)(RegAdmin);
