import React, { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class NavigationCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
              {this.props.workshop.workshop.workshopName}
            </CardTitle>
            <CardText style={{ color: "white" }}>
              {this.props.workshop.workshop.description}
            </CardText>

            <Button className="bg-transparent border-0">
              <a href={this.props.workshop.workshop.fileLink} target="_blank">
                <FaRegFilePowerpoint color="white" fontSize="1.75em" />
              </a>
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

export default NavigationCard;
