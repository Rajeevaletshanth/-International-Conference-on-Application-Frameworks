import React, { useState } from 'react'
import {Button, Modal, ModalHeader, ModalBody,} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { Alert } from 'reactstrap';


export default function ProfilePage(props) {

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setCloseAll(false);
    }
    const toggleAll = () => {
        setCloseAll(true);
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className} >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5">
                                    <Image src="https://i2.wp.com/worldbusinessfitness.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg?ssl=1" rounded style={{height:"150px"}}/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="row ml-1">
                                        He/Him
                                    </div>
                                    <h1><b>Daco Harkes</b></h1>
                                    <div className="row ml-1">
                                        Student
                                    </div>
                                    <div className="row ml-1">
                                        SLIIT
                                    </div>


                                </div>
                            </div>
                            <div className="row mt-5">
                                <div >
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-sm-8 ">
                                    <div className="row">
                                        Email
                                    </div>
                                    <div className="row">
                                        lasalshettiarachchi@gmail.com
                                    </div>

                                </div>
                                <div className="col-sm-4 ">
                                    <div className="row">
                                        Contact number
                                    </div>
                                    <div className="row">
                                        +940764694432
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <Alert color="danger">
                                    Intoduction to flutter
                                </Alert>

                                <Alert color="danger">
                                    Intoduction to flutter
                                </Alert>
                                <Alert color="danger">
                                    Intoduction to flutter
                                </Alert>
                            </div>
                            </div>
                    </ModalBody>

                </Modal>

        </div>
    )
}