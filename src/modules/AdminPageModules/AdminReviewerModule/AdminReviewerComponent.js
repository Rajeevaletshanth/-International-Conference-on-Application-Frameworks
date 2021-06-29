import React, { Component } from "react";
import CreateReviewer from "./CreateReviewer";
import ReviewerTable from "./ReviewerTable";

export class AdminReviewerComponent extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center text-white mb-5 display-3">REVIEWER</h3>
        <div className="row">
          <div className="col-lg-4">
            <CreateReviewer />
          </div>
          <div className="col-lg-8">
            <ReviewerTable />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminReviewerComponent;
