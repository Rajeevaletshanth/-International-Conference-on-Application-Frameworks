import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { GiClick } from "react-icons/gi";

export class AdminDashboard extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-white mt-5 mb-5 display-3">
          ADMIN DASHBOARD
          <hr />
        </h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  EDITOR
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="admineditor">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  REVIEWER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="adminreviewer">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  ATTENDEE
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="adminattendee">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  RESEARCHER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="adminresearcher">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  PRESENTER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="adminpresenter">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  Conference Details
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="adminconference">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
