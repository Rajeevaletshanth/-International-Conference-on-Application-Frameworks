import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/conferenceActions";
import { Table, Card, CardBody, Button } from "reactstrap";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
export class PendingEditorContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConferenceList();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            PENDING EDITOR CONTENT
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
                      <th>Conference Title</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Approved</th>
                      <th>Decline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.conferenceList.map((singleContent, index) => {
                      return (
                        <tr>
                          <th scope="row">{++index}</th>
                          <td>{singleContent.confTitle}</td>
                          <td>{singleContent.description}</td>
                          <td>
                            {singleContent.approved ? (
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
                              disabled={singleContent.approved}
                              onClick={() => {
                                const DataObj = {
                                  approved: true,
                                };
                                this.props.approveConferenceDetailsByAdmin(
                                  singleContent._id,
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
                              disabled={!singleContent.approved}
                              onClick={() => {
                                const DataObj = {
                                  approved: false,
                                };
                                this.props.approveConferenceDetailsByAdmin(
                                  singleContent._id,
                                  DataObj
                                );
                              }}
                            >
                              <AiTwotoneDislike color="red" fontSize="1.7em" />
                            </Button>
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
  conferenceList: state.conferenceReducer.conferenceList,
});

const mapActionToProps = {
  fetchAllConferenceList: actions.fetchAllConferenceList,
  approveConferenceDetailsByAdmin: actions.approveConferenceDetailsByAdmin,
};
export default connect(mapStateToProps, mapActionToProps)(PendingEditorContent);
