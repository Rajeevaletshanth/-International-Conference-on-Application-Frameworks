import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import regImg from 'url:../../assets/regImg.svg';
import * as actions from "../../../actions/authActions";
import * as reasearcherActions from "../../../actions/researcherActions";
import {connect} from "react-redux";
import {BsCalendar} from "react-icons/bs";
import StripeCheckout from "../../common/StripePayment/StripeCheckout";

export class ResearcherLogin extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",

      modal: false,
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const loginReasearcherObj = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.ReasearcherLogin(
        loginReasearcherObj,
          () => {
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Login successful",
          });
          window.location="/"
        },
        () => {
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage:
                "Username or password incorrect. Please try again.",
          });
        }
    );
  }

  render() {
    return (
      <div>
        <Container className='mt-5'>
          <Card>
            <CardBody className='p-5'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 container'>
                  <img src={regImg} alt='regImg' className='img-fluid' />
                </div>
                <div className='col-lg-6 col-md-6 container'>
                  <h3 className='mb-2 mt-5 font-weight-bold'>
                    RESEACHER LOGIN
                  </h3>
                  <hr />
                  <Form onSubmit={this.onLogin}>
                    <FormGroup>
                      {this.state.processStatus ? (
                          <div
                              className={this.state.processStatusAlert}
                              role="alert"
                          >
                            {this.state.processStatusMessage}
                          </div>
                      ) : (
                          ""
                      )}
                    </FormGroup>
                    <FormGroup row>
                      <Label for='email' sm={12}>
                        Email
                      </Label>
                      <Col sm={10}>
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Enter email'
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for='password' sm={12}>
                        Password
                      </Label>
                      <Col sm={10}>
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Enter password'
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={12}>
                        <Button className='btn btn-warning' type="submit">Submit</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>

        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              {" "}
              Pay the registration fee
            </ModalHeader>
            <ModalBody>
              <div>
                <h6>
                  <BsCalendar fontSize="1.5em" />{" "}
                  <span>
                    {" "}
                    Your reasearch paper has been approved. Please pay Rs1000.00 to proceed.
                  </span>
                </h6>
                <br/>
                <StripeCheckout role="REASEARCHER" amount="1000.00"/>
              </div>
            </ModalBody>
          </Modal>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleReasearcher: state.researcherReducer.singleReasearcher,
});

const mapActionToProps = {
  ReasearcherLogin: actions.ReasearcherLogin,


};

export default connect(mapStateToProps, mapActionToProps)(ResearcherLogin);
