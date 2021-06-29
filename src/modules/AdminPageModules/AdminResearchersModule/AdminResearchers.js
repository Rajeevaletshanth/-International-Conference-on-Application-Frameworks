import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/researcherActions";
import { Table, Card, CardBody } from "reactstrap";
export class AdminResearchers extends Component {
  componentDidMount() {
    this.props.fetchAllResearchers();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            RESEARCHERS
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
                      <th>Email</th>
                      <th>Job Status</th>
                      <th>University/WorkPlace</th>
                      <th>Workshop</th>
                      <th>Payment Status</th>
                      <th>Approved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.researcherList.map(
                      (singleResearcher, index) => {
                        return (
                          <tr>
                            <th scope="row">{++index}</th>
                            <td>{singleResearcher.firstName}</td>
                            <td>{singleResearcher.lastName}</td>
                            <td>{singleResearcher.email}</td>
                            <td>{singleResearcher.jobStatus}</td>
                            <td>{singleResearcher.universityOrWorkPlace}</td>
                            <td>{singleResearcher.researchPaper.paperTitle}</td>
                            <td>
                              {singleResearcher.paid ? (
                                <button className="btn btn-success">
                                  Paid
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Not Paid
                                </button>
                              )}
                            </td>
                            <td>
                              {singleResearcher.researchPaper.approved ? (
                                <button className="btn btn-success">
                                  Approved
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Unapproved
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )}
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
  researcherList: state.researcherReducer.researcherList,
});

const mapActionToProps = {
  fetchAllResearchers: actions.fetchAllResearchers,
};
export default connect(mapStateToProps, mapActionToProps)(AdminResearchers);
