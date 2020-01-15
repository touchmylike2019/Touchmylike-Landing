import React, { Fragment, useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userUpdateStatus, showUserStatus } from '../store/actions/usersActions'
import { userLogoutRequest } from '../store/actions/usersActions'
import Footer from '../components/Footer'
import {
    Container,
    Button,
    Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input
} from 'reactstrap'
import account from '../font-awesome/user-circle-solid.svg'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated,
        authenticatedUsername: state.users.authenticatedUsername
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userUpdateStatus: (id, userStatusDetails) => dispatch(userUpdateStatus(id, userStatusDetails)),
        showUserStatus: (id) => dispatch(showUserStatus(id)),
        userLogoutRequest: () => dispatch(userLogoutRequest())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(({ isAuthenticated, authenticatedUsername, userUpdateStatus, showUserStatus, userLogoutRequest }) => {

    let el_status, el_option, el_article
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [status, setStatus] = useState("")
    const [work, setWork] = useState([])

    const toggleStatus = () => setModal(!modal)
    const toggleWork = () => {
        setModal2(!modal2)
    }

    useEffect(() => {
        const fetctStatus = async () => {
            const status_message = await showUserStatus(authenticatedUsername)
            setStatus(status_message)
        }
        fetctStatus()
    })

    const handleForm = async e => {
        e.preventDefault()
        try {
            await userUpdateStatus(authenticatedUsername, { status_message: el_status.value })
            toggleStatus()
        } catch (error) {
            console.error(error)
        }
    }


    if (isAuthenticated !== true) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="account">
                    <Row>
                        <Col>
                            <img width="120px" src={account} alt="account" />
                        </Col>
                        <Col style={{ marginTop: "20px" }}>
                            <h2><b>{authenticatedUsername}</b></h2>
                            <p>{status}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                style={{ color: "rgb(76,72,255)", background: "#FFF", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}
                                className="edit-profile mt-4"
                                onClick={toggleStatus}>เเก้ไขโปรไฟล์
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/calendar">
                                <Button
                                    className="edit-profile mt-4"
                                    style={{ color: "rgb(76,72,255)", background: "#FFF", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}
                                >
                                    สร้างข้อมูลเวลางาน
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                className="edit-profile mt-4"
                                style={{ color: "#FFF", background: "red", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}
                                onClick={() => userLogoutRequest()}>
                                ออกจากระบบ
                        </Button>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Modal isOpen={modal} className="mt-5">
                        <ModalHeader>เเก้ไขโปรไฟล์</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="status_message" placeholder="เเก้ไขสถานะ" innerRef={el => el_status = el} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleForm} color="primary">ตกลง</Button>{' '}
                            <Button color="danger" onClick={toggleStatus}>ยกเลิก</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                {/* <div>
                    <Modal isOpen={modal2} className="mt-5">
                        <ModalHeader>เพิ่มข้อมูลงาน</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input type="text" innerRef={el => el_article = el} placeholder="ชื่อเรื่อง" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>การเข้าถึง</Label>
                                    <Input type="select" innerRef={el => el_option = el}>
                                        <option value="public">สาธารณะ</option>
                                        <option value="private">ส่วนตัว</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={handleWork}>ตกลง</Button>{' '}
                            <Button color="danger" onClick={() => setModal2(!modal2)}>ยกเลิก</Button>
                        </ModalFooter>
                    </Modal>
                </div> */}
            </Container>
            <Footer />
        </Fragment>
    )
})