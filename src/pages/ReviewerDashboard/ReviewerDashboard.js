import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import KeynoteCard from "../../common/KeynoteCard/KeynoteCard";
import * as reasearchpaperactions from "../../../actions/reasearchpaperActions";
import * as workshopactions from "../../../actions/workshopActions";
import {connect} from "react-redux";
import {Alert, Button, Card, CardBody} from "reactstrap";
import {AiFillCheckCircle} from "react-icons/ai";
import {IoIosRemoveCircle} from "react-icons/io";
import {PaperCard} from "../../common/PaperCard/PaperCard";

class ReviewerDashboard extends Component {


    constructor(props) {
        super(props);
        this.selectWorkshop = this.selectWorkshop.bind(this)
        this.selectReasearchpaper = this.selectReasearchpaper.bind(this)
        this.state={
            selectedWorkshop:null,
            selectedReasearchpaper:null,
        }
    }



    componentDidMount() {
        this.props.fetchAllUnapprovedReasearchpapers();
        this.props.fetchAllUnapprovedWorkshops();

    }

    selectWorkshop(singleItem){
        this.setState({selectedWorkshop:singleItem})
    }
    selectReasearchpaper(singleItem){
        this.setState({selectedReasearchpaper:singleItem})
    }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            REVIEWER DASHBOARD
            <hr />
          </h3>
        </div>
        <div className="row mt-5 container">
          <div className="col-sm-8 ">
              <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                  <CardBody style={{ padding:"75px"}}>
                      {this.props.unapprovedWorkshopList &&
                      this.props.unapprovedWorkshopList
                          .map((singleItem) => {
                              return (
                                  <Alert color="danger" onClick={()=>{this.selectWorkshop(singleItem)}}>
                                      <Button className="bg-transparent border-0" onClick={()=>{
                                          const workshoptobeApproved = {
                                              id:singleItem._id,
                                              approved:"true",
                                          }
                                          this.props.approveWorkshop(workshoptobeApproved)

                                      }
                                      }>
                                          <AiFillCheckCircle color="green" fontSize="1.7em" />
                                      </Button>
                                      <Button className="bg-transparent border-0" >
                                          <IoIosRemoveCircle color="red" fontSize="1.7em" />
                                      </Button>

                                      <b className="ml-5">
                                          {singleItem.workshop.workshopName}
                                      </b>
                                  </Alert>
                              );
                          })}


                  </CardBody>
              </Card>
          </div>
          <div className="col-sm-4 ">
              {this.state.selectedWorkshop ? <KeynoteCard workshop={this.state.selectedWorkshop}/>:""}
          </div>
        </div>

        <div className="row mt-5 container">
          <div className="col-sm-8 ">
              <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                  <CardBody style={{ padding:"75px"}}>
                      {this.props.unapprovedReasearchPaperList &&
                      this.props.unapprovedReasearchPaperList
                          .map((singleItem) => {
                              return (
                                  <Alert color="danger" onClick={()=>{this.selectReasearchpaper(singleItem)}}>
                                      <Button className="bg-transparent border-0" onClick={()=>{

                                          const reasearchPapertobeApproved = {
                                              id:singleItem._id,
                                              approved:"true",
                                          }
                                          this.props.approveReasearchPapers(reasearchPapertobeApproved)
                                          this.setState({selectedReasearchpaper:""})

                                      }
                                      }>
                                          <AiFillCheckCircle color="green" fontSize="1.7em" />
                                      </Button>
                                      <Button className="bg-transparent border-0" >
                                          <IoIosRemoveCircle color="red" fontSize="1.7em" />
                                      </Button>

                                      <b className="ml-5">
                                          {singleItem.researchPaper.paperTitle}
                                      </b>
                                  </Alert>
                              );
                          })}


                  </CardBody>
              </Card>

          </div>
          <div className="col-sm-4 ">
              {this.state.selectedReasearchpaper ? <PaperCard reasearchPaper={this.state.selectedReasearchpaper}/>:""}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    unapprovedReasearchPaperList: state.reasearchpaperReducer.unapprovedReasearchPaperList,
    unapprovedWorkshopList: state.workshopReducer.upapprovedWorkshopList,

});

const mapActionToProps = {
    fetchAllUnapprovedReasearchpapers: reasearchpaperactions.fetchAllUnapprovedReasearchpapers,
    approveReasearchPapers: reasearchpaperactions.approveReasearchPapers,
    fetchAllUnapprovedWorkshops: workshopactions.fetchAllUnapprovedWorkshops,
    approveWorkshop: workshopactions.approveWorkshop,

};

export default connect(mapStateToProps, mapActionToProps)(ReviewerDashboard);
