import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/editorActions";
import {
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class CreateEditor extends Component {
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

    const registerEditorObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.editorRegister(
      registerEditorObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Editor Registered successfully",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
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
        <div>
          <Card>
            <CardBody className="p-5">
              <h3 className="text-center">CREATE | EDITOR</h3>
              <hr />
              <Form onSubmit={this.onRegister}>
                <FormGroup>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="firstName" sm={4}>
                    First Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={this.state.firstName}
                      placeholder="Enter First Name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="lastName" sm={4}>
                    Last Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={this.state.lastName}
                      placeholder="Enter Last Name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={4}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      placeholder="Enter email"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="password" sm={4}>
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      placeholder="Enter Password"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
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
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  editorRegister: actions.editorRegister,
};

export default connect(null, mapActionToProps)(CreateEditor);
