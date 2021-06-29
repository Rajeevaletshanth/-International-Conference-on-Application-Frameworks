import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/latestNewsActions";
import { Table, Card, CardBody, Button } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";

export class LatestNewsTable extends Component {
  constructor(props) {
    super(props);
    this.deleteLatestFunc = this.deleteLatestFunc.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllLatestNews();
  }

  deleteLatestFunc(newsID) {
    this.props.deleteLatestNews(newsID);
  }
  render() {
    return (
      <div>
        <div className="mt-3">
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
                      <th>Message</th>
                      <th>Link</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.latestNewsList &&
                      this.props.latestNewsList.map((singleNews, index) => {
                        return (
                          <tr>
                            <th scope="row">{++index}</th>
                            <td>{singleNews.message}</td>
                            <td>{singleNews.hyperlink}</td>
                            <td>{singleNews.newsDate.substring(0, 10)}</td>
                            <td>
                              {singleNews.approved ? (
                                <button className="btn btn-success">
                                  Approved
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Unapproved
                                </button>
                              )}
                            </td>
                            <td>
                              <Button
                                className="bg-transparent border-0"
                                onClick={() => {
                                  this.deleteLatestFunc(singleNews._id);
                                }}
                              >
                                <AiFillDelete color="black" fontSize="1.5em" />
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
  latestNewsList: state.latestNewsReducer.latestNewsList,
});

const mapActionToProps = {
  fetchAllLatestNews: actions.fetchAllLatestNews,
  deleteLatestNews: actions.deleteLatestNews,
};
export default connect(mapStateToProps, mapActionToProps)(LatestNewsTable);
