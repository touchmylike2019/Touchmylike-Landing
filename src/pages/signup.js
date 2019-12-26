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
                            <Input placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="username" />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="email" />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Input placeholder="password" type="password"/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="confirm password" type="password"/>
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Button>สมัครสมาชิก</Button>
                        </FormGroup>
                    </Form>
                    <p className="mt-5">
                        หากมีบัญชีผู้ใช้เเล้ว? <Link to="/login">เข้าสู่ระบบ</Link>
                    </p>
                    <Modal isOpen={modal} fade={false} toggle={toggle} className="mt-5">
                        <ModalHeader toggle={toggle}>เเจ้งเตือน</ModalHeader>
                        <ModalBody>
                            <p style={{color: "red"}}>ขออภัยผู้ใช้งาน, ขณะนี้ทางทีมงานกำลังเร่งดำเนินการอัพเดตระบบฐานข้อมูลซึ่งขณะนี้ยังไม่สามารถสมัครสมาชิกได้ได้</p>
                    </ModalBody>
                    </Modal>
                </div>
            </Container>
        </Fragment>
    )
}