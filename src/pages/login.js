import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLoginRequest } from '../store/actions/usersActions'
import {
    Container,
    Form, FormGroup, Input,
    Button,
    Modal, ModalHeader, ModalBody
} from 'reactstrap'
import account from '../font-awesome/user-circle-solid.svg'
import Footer from '../components/Footer'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoginRequest: (userLoginDetails) => dispatch(userLoginRequest(userLoginDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(({ history, userLoginRequest }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    let el_username, el_password

    const handleForm = async e => {
        e.preventDefault()
        const userCredentials = {
            username: el_username.value,
            password: el_password.value
        }

        try {
            const check = await userLoginRequest(userCredentials)
            if(check.errors) {
                toggle()
            }else {
                history.push('/')
            }
          } catch (error) {
            console.error(error)
          }
    }


    // if(isAuthenticated) {
    //     return <Redirect to="/" />
    // }
    return (
        <Fragment>
            <Container>
                <div className="login">
                    <img width="120px" src={account} alt="account" />
                    <Form className="mt-5" onSubmit={handleForm}>
                        <FormGroup>
                            <Input type="text" placeholder="username" innerRef={el => el_username = el}/>
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Input type="password" placeholder="password" innerRef={el => el_password = el}/>
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
                            <p style={{color: "red"}}>username หรือ password ไม่ถูกต้อง, กรุณากรอกใหม่อีกครั้ง</p>
                    </ModalBody>
                    </Modal>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
})