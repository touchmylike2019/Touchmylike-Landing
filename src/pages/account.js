import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userUpdateStatus, showUserStatus } from '../store/actions/usersActions'
import Header from '../components/Header/Header'
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
        authenticatedUsername: state.users.authenticatedUsername
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userUpdateStatus: (id, userStatusDetails) => dispatch(userUpdateStatus(id, userStatusDetails)),
        showUserStatus: (id) => dispatch(showUserStatus(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(({ authenticatedUsername, userUpdateStatus, showUserStatus }) => {

    let el_status
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const toggleStatus = () => setModal(!modal)
    const toggleWork = () => setModal2(!modal2)
    const [status, setStatus] = useState("")

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

    return (
        <Fragment>
            <Header />
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
                        <Button
                            style={{ color: "rgb(76,72,255)", background: "#FFF", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}
                            className="edit-profile mt-4"
                            onClick={toggleStatus}>เเก้ไขโปรไฟล์
                        </Button>
                        <Button
                            className="edit-profile mt-4"
                            style={{ color: "rgb(76,72,255)", background: "#FFF", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}
                            onClick={toggleWork}>
                            สร้างข้อมูลเวลางาน
                            </Button>
                    </Row>
                    <Row>
                        <Link to="/calendar"><Button color="success" className="edit-profile mt-4">ดูงาน</Button></Link>
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
                <div>
                    <Modal isOpen={modal2} className="mt-5">
                        <ModalHeader>เพิ่มข้อมูลงาน</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input type="text" placeholder="ชื่อเรื่อง" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>การเข้าถึง</Label>
                                    <Input type="select">
                                        <option value="public">สาธารณะ</option>
                                        <option value="private">ส่วนตัว</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={toggleWork}>ตกลง</Button>{' '}
                            <Button color="danger" onClick={toggleWork}>ยกเลิก</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>
        </Fragment>
    )
})