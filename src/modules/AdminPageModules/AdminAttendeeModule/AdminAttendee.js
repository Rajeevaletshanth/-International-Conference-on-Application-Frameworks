import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/attendeeActions";
import { Table, Card, CardBody } from "reactstrap";
export class AdminAttendee extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllAttendees();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            ATTENDEE
          </h3>
          <Card>
            <CardBody className="p-3">
              <div
                style={{
                  maxHeight: "390px",
                  overflowY: "auto",
                }}
              >
                <Table hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Job Status</th>
                      <th>University/WorkPlace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.attendeeList.map((singleAttendee, index) => {
                      return (
                        <tr>
                          <th scope="row">{++index}</th>
                          <td>{singleAttendee.firstName}</td>
                          <td>{singleAttendee.lastName}</td>
                          <td>{singleAttendee.jobStatus}</td>
                          <td>{singleAttendee.universityOrWorkPlace}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  attendeeList: state.attendeeReducer.attendeeList,
});

const mapActionToProps = {
  fetchAllAttendees: actions.fetchAllAttendees,
};
export default connect(mapStateToProps, mapActionToProps)(AdminAttendee);
