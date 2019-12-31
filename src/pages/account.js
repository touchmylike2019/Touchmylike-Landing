import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import {
    Container,
    Button,
    Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from 'reactstrap'
import account from '../font-awesome/user-circle-solid.svg'

const mapStateToProps = state => {
    return {
        authenticatedUsername: state.users.authenticatedUsername
    }
}

export default connect(mapStateToProps)(({ authenticatedUsername }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }
    const [status, setStatus] = useState("สวัสดีปีใหม่ค้าบบ !!!")

    return (
        <Fragment>
            <Header />
            <Container>
                <div className="account">
                    <Row>
                        <Col>
                            <img width="150px" src={account} alt="account" />
                        </Col>
                        <Col style={{ marginTop: "20px" }}>
                            <h2><b>{authenticatedUsername}</b></h2>
                            <p>{status}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Button className="edit-profile mt-4 ml-3" onClick={toggle}>เเก้ไขโปรไฟล์</Button>
                        <Button className="edit-profile mt-4 ml-3">เพิ่มข้อมูลงาน</Button> 
                    </Row>
                    <Row>
                        <Link to="/calendar"><Button color="success" className="edit-profile mt-4 ml-3">คิวงาน</Button></Link>
                    </Row>
                </div>
                <div>
                    <Modal isOpen={modal} className="mt-5">
                        <ModalHeader toggle={toggle}>เเก้ไขโปรไฟล์</ModalHeader>
                        <ModalBody>
                            <Input type="text" innerRef={el => el = status}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>ตกลง</Button>{' '}
                            <Button color="danger" onClick={toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>
        </Fragment>
    )
})