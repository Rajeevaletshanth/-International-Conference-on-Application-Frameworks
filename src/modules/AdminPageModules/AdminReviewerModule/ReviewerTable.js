import React, { Component } from "react";
import { Table, Card, CardBody } from "reactstrap";
import * as actions from "../../../../actions/reviewerActions";
import {connect} from "react-redux";

export class ReviewerTable extends Component {
  componentDidMount() {
    this.props.fetchAllReviewers();
  }
  render() {
    return (
      <div>
        <div>
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
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.reviewerList &&
                    this.props.reviewerList.map((singleReviewer, index) => {

                    return (
                        <tr>
                          <th scope="row">{index}</th>
                          <td>{singleReviewer.firstName}</td>
                          <td>{singleReviewer.lastName}</td>
                          <td>{singleReviewer.email}</td>
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
  user: state.authReducer.user,
  reviewerList: state.reviewerReducer.reviewerList,
});

const mapActionToProps = {
  fetchAllReviewers: actions.fetchAllReviewers,
};
export default connect(mapStateToProps, mapActionToProps)(ReviewerTable);
