import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/conferenceActions";
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

class AddConference extends Component {
  constructor(props) {
    super(props);
    this.onCreateConference = this.onCreateConference.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      venue: "",
      confTitle: "",
      description: "",
      fromTime: "",
      toTime: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCreateConference(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const newConferenceObj = {
      venue: this.state.venue,
      confTitle: this.state.confTitle,
      description: this.state.description,
      fromTime: this.state.fromTime,
      toTime: this.state.toTime,
    };

    this.props.addConferenceDetails(
      newConferenceObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Conference Added Successful",
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
              <h3 className="text-center">CREATE | CONFERENCE</h3>
              <hr />
              <Form onSubmit={this.onCreateConference}>
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
                  <Label for="confTitle" sm={4}>
                    Conference Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="confTitle"
                      id="confTitle"
                      placeholder="Enter Conference Name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="description" sm={4}>
                    Description
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="fomTime" sm={4}>
                    From
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="date"
                      name="fromTime"
                      id="fromTime"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="toTime" sm={4}>
                    To
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="date"
                      name="toTime"
                      id="toTime"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="venue" sm={4}>
                    Venue
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="venue"
                      id="venue"
                      placeholder="Enter Venue"
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
  addConferenceDetails: actions.addConferenceDetails,
};

export default connect(null, mapActionToProps)(AddConference);
