import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/conferenceActions";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class ConferenceCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllApprovedConferenceList();
  }

  render() {
    return (
      <div>
        {this.props.approvedConferenceList
          .reverse()
          .slice(0, 1)
          .map((singleConference) => {
            return (
              <Card
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#21012B",
                  marginLeft: "20px",
                }}
                className="text-center"
              >
                <CardBody>
                  <h2 className="text-white display-5">Conference Details</h2>
                  <hr style={{ color: "white" }} />
                  <CardTitle style={{ color: "white" }}>
                    <div className="row">
                      <div className="col-md-6 text-center">Title </div>

                      <div className="col-md-6 text-left">
                        {singleConference.confTitle}
                      </div>
                    </div>
                  </CardTitle>
                  <center>
                    {" "}
                    <CardText style={{ color: "white" }}>
                      <div className="row">
                        <div className="col-md-6 text-center">About </div>

                        <div className="col-md-6 text-left">
                          {" "}
                          {singleConference.description}
                        </div>
                      </div>
                    </CardText>
                    <CardText style={{ color: "white" }}>
                      <div className="row">
                        <div className="col-md-6 text-center">From</div>

                        <div className="col-md-6 text-left">
                          {" "}
                          {singleConference.fromTime}
                        </div>
                      </div>
                    </CardText>
                    <CardText style={{ color: "white" }}>
                      <div className="row">
                        <div className="col-md-6 text-center">To</div>

                        <div className="col-md-6 text-left">
                          {" "}
                          {singleConference.toTime}
                        </div>
                      </div>
                    </CardText>
                    <CardText style={{ color: "white" }}>
                      <div className="row">
                        <div className="col-md-6 text-center">Venue</div>

                        <div className="col-md-6 text-left">
                          {" "}
                          {singleConference.venue}
                        </div>
                      </div>
                    </CardText>
                  </center>
                </CardBody>
              </Card>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  approvedConferenceList: state.conferenceReducer.approvedConferenceList,
});

const mapActionToProps = {
  fetchAllApprovedConferenceList: actions.fetchAllApprovedConferenceList,
};
export default connect(mapStateToProps, mapActionToProps)(ConferenceCard);
