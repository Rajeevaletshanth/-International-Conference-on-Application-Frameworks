import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/templateActions";

class TemplateTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewTemplate();
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          {this.props.templates &&
            this.props.templates.map((singleTemplate) => {
              return (
                <div className="col-lg-6 p-4">
                  <p className="mt-2">
                    <span className="templateTitle">
                      {singleTemplate.templateName}
                      <button
                        className="btn btn-sm btn-danger font-weight-bolder m-2"
                        onClick={() =>
                          this.props.deleteTemplate(singleTemplate._id)
                        }
                      >
                        X
                      </button>
                    </span>
                  </p>

                  <iframe
                    src={singleTemplate.fileLink}
                    width="100%"
                    height="600px"
                    frameBorder="0"
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
  templates: state.templateReducer.templates,
});

const mapActionToProps = {
  viewTemplate: actions.viewTemplate,
  deleteTemplate: actions.deleteTemplate,
};

export default connect(mapStateToProps, mapActionToProps)(TemplateTable);
