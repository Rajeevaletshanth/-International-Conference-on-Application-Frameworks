import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/latestNewsActions";
import { Table, Card, CardBody, Button } from "reactstrap";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

export class PendingEditorNews extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllLatestNews();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            PENDING EDITOR TEMPLATES
          </h3>
          {/* <Card>
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
                      <th>Template Name</th>
                      <th>Link</th>
                      <th>Approved Status</th>
                      <th>Approve</th>
                      <th>Decline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.templates &&
                      this.props.templates.map((singleTemplate, index) => {
                        return (
                          <tr>
                            <th scope="row">{++index}</th>
                            <td>{singleTemplate.templateName}</td>
                            <td>
                              <a href={singleTemplate.fileLink} target="_blank">
                                Download Link
                              </a>
                            </td>
                            <td>
                              {singleTemplate.approved ? (
                                <button className="btn btn-success">
                                  Approved
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Unpproved
                                </button>
                              )}
                            </td>
                            <td>
                              <Button
                                className="bg-transparent border-0"
                                disabled={singleTemplate.approved}
                                onClick={() => {
                                  const DataObj = {
                                    approved: true,
                                  };
                                  this.props.approveTemplate(
                                    singleTemplate._id,
                                    DataObj
                                  );
                                }}
                              >
                                <AiTwotoneLike color="green" fontSize="1.7em" />
                              </Button>
                            </td>
                            <td>
                              <Button
                                className="bg-transparent border-0"
                                disabled={!singleTemplate.approved}
                                onClick={() => {
                                  const DataObj = {
                                    approved: false,
                                  };
                                  this.props.approveTemplate(
                                    singleTemplate._id,
                                    DataObj
                                  );
                                }}
                              >
                                <AiTwotoneDislike
                                  color="red"
                                  fontSize="1.7em"
                                />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.templateReducer.templates,
});

const mapActionToProps = {
  fetchAllLatestNews: actions.fetchAllLatestNews,
  approveNewsFunction: actions.approveNewsFunction,
};
export default connect(mapStateToProps, mapActionToProps)(PendingEditorNews);
