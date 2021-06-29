import React, { Component } from "react";
import * as actions from "../../../../actions/workshopActions";
import { connect } from "react-redux";
import { CardColumns, Container } from "reactstrap";
import KeynoteCard from "../../../common/KeynoteCard/KeynoteCard";
import NavigationCard from "../../NavigationCard/NavigationCard";

export class KeyNoteSpeakers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllApprovedWorkshops();
  }
  render() {
    return (
      <Container className="mt-5">
        <h1 className="text-white text-center">KEYNOTES</h1>
        <CardColumns>
          {this.props.approvedWorkshopList &&
            this.props.approvedWorkshopList
              .reverse()
              .slice(0, 2)
              .map((singleApprovedWorkshop) => {
                return <KeynoteCard workshop={singleApprovedWorkshop} />;
              })}

          {this.props.approvedWorkshopList &&
            this.props.approvedWorkshopList
              .slice(2, 4)
              .map((singleApprovedWorkshop) => {
                return <NavigationCard workshop={singleApprovedWorkshop} />;
              })}
        </CardColumns>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  approvedWorkshopList: state.workshopReducer.approvedWorkshopList,
});

const mapActionToProps = {
  fetchAllApprovedWorkshops: actions.fetchAllApprovedWorkshops,
};

export default connect(mapStateToProps, mapActionToProps)(KeyNoteSpeakers);
