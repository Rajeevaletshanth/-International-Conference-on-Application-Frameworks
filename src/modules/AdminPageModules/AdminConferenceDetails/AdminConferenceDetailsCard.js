import React, { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class AdminConferenceDetailsCard extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            borderRadius: "20px",
            backgroundColor: "#21012B",
            marginLeft: "20px",
          }}
        >
          <CardBody>
            <CardTitle tag="h5" style={{ color: "white" }}>
              Introduction to flutter
            </CardTitle>
            <CardText style={{ color: "white" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>

            <Button className="bg-transparent border-0">
              <FaRegFilePowerpoint color="white" fontSize="1.75em" />
            </Button>

            <Button className="bg-transparent border-0">
              <BsCalendar color="white" fontSize="1.5em" />
            </Button>

            <Button className="bg-transparent border-0">
              <CgProfile color="white" fontSize="1.7em" />
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminConferenceDetailsCard;
