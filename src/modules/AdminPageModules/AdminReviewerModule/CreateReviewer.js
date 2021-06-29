import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/reviewerActions";

import {Card, CardBody, Col, Button, Form, FormGroup, Label, Input,} from "reactstrap";

export class CreateReviewer extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      password: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    }
  }
  onValueChange = (e)=>this.setState({ [e.target.name]: e.target.value });
  onRegister(e){
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const registerReviewerObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.reviewerRegister(
        registerReviewerObj,
        ()=>{
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Register successful",

            firstName:"",
            lastName:"",
            email:"",
            password: "",
          });


        },
        ()=>{
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage: "Something went wrong. Please try again.",
          });
        },

    )
  }

  render() {
    return (
        <div>
          <div>
            <Card>
              <CardBody className="p-5">
                <h3 className="text-center">CREATE | REVIEWER</h3>
                <hr />
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
                    <Label for="firstName" sm={4}>
                      First Name
                    </Label>
                    <Col sm={8}>
                      <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter First Name"
                          value={this.state.firstName}
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
                          placeholder="Enter Last Name"
                          value={this.state.lastName}
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
                          placeholder="Enter email"
                          value={this.state.email}
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
                          placeholder="Enter Password"
                          value={this.state.password}
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button className="btn btn-warning" type="submit">Submit</Button>
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
  reviewerRegister: actions.reviewerRegister,
};

export default connect(null, mapActionToProps)(CreateReviewer);
