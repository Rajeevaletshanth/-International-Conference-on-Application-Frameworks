import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/presenterActions";
import { Table, Card, CardBody } from "reactstrap";
export class AdminPresenter extends Component {
  componentDidMount() {
    this.props.fetchAllPresenters();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            WORKSHOP PRESENTERS
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
                      <th>Approved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.presenterList.map((singlePresenter, index) => {
                      return (
                        <tr>
                          <th scope="row">{++index}</th>
                          <td>{singlePresenter.firstName}</td>
                          <td>{singlePresenter.lastName}</td>
                          <td>{singlePresenter.email}</td>
                          <td>{singlePresenter.jobStatus}</td>
                          <td>{singlePresenter.universityOrWorkPlace}</td>
                          <td>{singlePresenter.workshop.workshopName}</td>
                          <td>
                            {singlePresenter.workshop.approved ? (
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
  presenterList: state.presenterReducer.presenterList,
});

const mapActionToProps = {
  fetchAllPresenters: actions.fetchAllPresenters,
};
export default connect(mapStateToProps, mapActionToProps)(AdminPresenter);
