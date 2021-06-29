import React, { Component } from "react";
import "./GetInTouch.css";
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

export default class GetInTouch extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br /> <br />
        {/* <div className="row">
          <div className="col-lg-6  mt-3">
            <iframe
              className="googleMapDiv"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=302&amp;height=383&amp;hl=en&amp;q=SLIIT%20Colombo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=9d0b336a328f9dc4c3b799ea47ad1637cd93b6d0"
            ></script>
          </div>
          <div className="col-lg-6 mt-3">
            <Card>
              <CardBody className="p-5">
                <h3>Get in touch with us</h3>
                <hr />
                <br />
                <Form>
                  <FormGroup row>
                    <Label for="First Name" sm={2}>
                      Name
                    </Label>
                    <Col sm={5}>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter first name"
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
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="subject" sm={2}>
                      Subject
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter subject"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="message" sm={2}>
                      Message
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Enter message"
                      />
                    </Col>
                  </FormGroup>
                  <br />
                  <Button className="btn btn-warning btn-md">Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div> */}
      </div>
    );
  }
}
