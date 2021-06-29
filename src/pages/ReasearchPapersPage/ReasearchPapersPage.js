import React, {Component} from 'react';
import Navbar from "../../common/Navbar/Navbar";
import {CardColumns, Container} from "reactstrap";
import Footer from "../../common/Footer/Footer";
import * as reasearchpaperactions from "../../../actions/reasearchpaperActions";
import {connect} from "react-redux";
import {PaperCard} from "../../common/PaperCard/PaperCard";

class ReasearchPapersPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchAllApprovedReasearchpapers()
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container className="mt-5">
                    <CardColumns >
                        {this.props.approvedReasearchPaperList.map((singleItem)=>{
                            return(
                                <PaperCard reasearchPaper={singleItem}/>
                            )
                        })}

                    </CardColumns>
                </Container>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    approvedReasearchPaperList: state.reasearchpaperReducer.approvedReasearchPaperList,

});

const mapActionToProps = {
    fetchAllApprovedReasearchpapers: reasearchpaperactions.fetchAllApprovedReasearchpapers,
};
export default connect(mapStateToProps, mapActionToProps)(ReasearchPapersPage);