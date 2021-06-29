import React, { Component } from "react";
import AddConference from "./AddConference";
import AddLatestNews from "./AddLatestNews";
import AddTemplates from "./AddTemplates";
import ConferenceCard from "./ConferenceCard";
import LatestNewsTable from "./LatestNewsTable";
import TemplateTable from "./TemplateTable";

export class Editor extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-white mt-5 mb-5 display-3">
          EDITOR DASHBOARD
          <hr />
        </h3>
        {/* Conference Details */}
        <div className="row">
          <h3 className="text-center text-white mt-5 mb-5 display-6">
            CONFERENCE DETAILS
          </h3>
          <div className="col-md-4">
            <AddConference />
          </div>
          <div className="col-md-8">
            <ConferenceCard />
          </div>
        </div>

        {/* Latest News */}
        <div className="row">
          <h3 className="text-center text-white mt-5 mb-5 display-6">
            LATEST NEWS
          </h3>
          <div className="col-md-12">
            <AddLatestNews />
          </div>
          <div className="col-md-12">
            <LatestNewsTable />
          </div>
        </div>

        {/* Templates */}
        <div className="row">
          <h3 className="text-center text-white mt-5 mb-5 display-6">
            TEMPLATES
          </h3>
          <div className="col-md-12">
            <AddTemplates />
          </div>
          <div className="col-md-12">
            <TemplateTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
