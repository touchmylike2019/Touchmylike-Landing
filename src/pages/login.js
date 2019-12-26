import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import {
    Container,
    Form, FormGroup, Input,
    Button,
    Modal, ModalHeader, ModalBody
} from 'reactstrap'
import account from '../font-awesome/user-circle-solid.svg'

export default () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const handleForm = e => {
        e.preventDefault()
        toggle()
    }

    return (
        <Fragment>
            <Header />
            <Container>
                <div className="login">
                    <img width="150px" src={account} alt="account" />
                    <Form className="mt-5" onSubmit={handleForm}>
                        <FormGroup>
                            <Input placeholder="username" />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Input type="password" placeholder="password" />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Button>เข้าสู่ระบบ</Button>
                        </FormGroup>
                    </Form>
                    <p className="mt-5">
                        หากยังไม่มีบัญชีผู้ใช้? <Link to="/signup">สมัครสมาชิก</Link>
                    </p>
                    <Modal isOpen={modal} fade={false} toggle={toggle} className="mt-5">
                        <ModalHeader toggle={toggle}>เเจ้งเตือน</ModalHeader>
                        <ModalBody>
                            <p style={{color: "red"}}>ขออภัยผู้ใช้งาน, ขณะนี้ทางทีมงานกำลังเร่งดำเนินการอัพเดตระบบฐานข้อมูลซึ่งขณะนี้ยังไม่สามารถเข้าสู่ระบบได้</p>
                    </ModalBody>
                    </Modal>
                </div>
            </Container>
        </Fragment>
    )
}