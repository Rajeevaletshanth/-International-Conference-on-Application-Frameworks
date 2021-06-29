import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/templateActions";

import "./Templates.css";

export class Templates extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewTemplateApproved();
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <h3 className="text-center text-white mb-5 display-3">
            DOWNLOAD TEMPLATES
          </h3>

          {this.props.approveTemplates &&
            this.props.approveTemplates.map((singleTemplate) => {
              return (
                <div className="col-lg-6 p-4">
                  <p className="mt-2">
                    <span className="templateTitle">
                      {singleTemplate.templateName}
                    </span>
                  </p>

                  <iframe
                    height="500px"
                    width="100%"
                    src={singleTemplate.fileLink}
                  ></iframe>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  approveTemplates: state.templateReducer.approveTemplates,
});

const mapActionToProps = {
  viewTemplateApproved: actions.viewTemplateApproved,
};

export default connect(mapStateToProps, mapActionToProps)(Templates);
