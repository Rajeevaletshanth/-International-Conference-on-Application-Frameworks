import React, { Component } from 'react'
import StripeCheck from 'react-stripe-checkout'
import { Button } from "reactstrap";
import * as actions from "../../../actions/authActions";
import { connect } from "react-redux";

class StripeCheckout extends Component {
    constructor(props) {
        super(props);
        this.makePayment = this.makePayment.bind(this)
        this.state = {
            payment: {
                name: "react from FB",
                price: this.props.amount,
                productby: "FB"
            }
        }
    }

    makePayment(token) {
        const body = {
            token,
            payment: this.state.payment
        }
        console.log(body)
        const header = {
            "COntent-Type": "application/json"
        }

        return fetch(`http://localhost:5000/api/Payment`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response)
            if (this.props.role == "ATTENDEE") {



                const registerAttendeeObj = {
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                    email: this.props.email,
                    password: this.props.password,
                    contactNumber: this.props.contactNumber,
                    jobStatus: this.props.jobStatus,
                    universityOrWorkPlace: this.props.universityOrWorkPlace,
                    statementOfInterest: this.props.statementOfInterest,
                    workshopAttends :this.props.workshops,
                    imgLink:this.props.imgLink

                };
                console.log(registerAttendeeObj)

                this.props.attendeeRegister(
                    registerAttendeeObj,
                    () => {
                        alert("Success");
                        window.location = "/";
                    },
                    () => {

                    }
                );

            }
        })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <StripeCheck stripeKey="pk_test_51IrxfTFhAO44cnt88HMqK5pIY8KBk4Q7o9YyNOIMgKd7v2bCvFi8u1kkr1ftGEmo0NdjHc4BOykDMjkeRNjQd9Sj00x3xpTvSF" token={this.makePayment} name="Buy react">
                    <Button> Pay The Registration Fee</Button>
                </StripeCheck>
            </div>
        )
    }

}
const mapActionToProps = {
    attendeeRegister: actions.attendeeRegister,
  };

export default connect(null, mapActionToProps)(StripeCheckout);
