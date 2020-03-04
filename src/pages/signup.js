import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkUserUniqueness, userSignupRequest } from '../store/actions/usersActions'
import Header from '../components/Header/Header'
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
        checkUserUniqueness: (userInputDetails) => dispatch(checkUserUniqueness(userInputDetails)),
        userSignupRequest: (userSignupDetails) => dispatch(userSignupRequest(userSignupDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(({ history, userSignupRequest }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    let el_name, el_username, el_email, el_password, el_confirm_password

    const checkEmtry = (name, username, email, password, confirmPassword) => {
        if(name !== '' && username !== '' && email !== '', password !== '', confirmPassword !== '') {
            if(password === confirmPassword) {
                return true
            }
        }
        return false
    }

    const handleForm = async e => {
        e.preventDefault()
        const userDetails = {
            name: el_name.value,
            username: el_username.value,
            email: el_email.value,
            password: el_password.value,
            confirmPassword: el_confirm_password.value
        }
        try {
            const emtry = checkEmtry(el_name.value, el_username.value, el_email.value, el_password.value, el_confirm_password.value)
            console.log(emtry)
            if (emtry) {
                const res = await userSignupRequest(userDetails)
                const check = await res.json()
                if (!check.errors) {
                    history.push('/login')
                }
            } else {
                toggle()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="login">
                    <img width="120px" src={account} alt="account" />
                    <Form className="mt-5" onSubmit={handleForm}>
                        <FormGroup>
                            <Input type="text" placeholder="name" innerRef={el => el_name = el} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" placeholder="username" innerRef={el => el_username = el} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" placeholder="email" innerRef={el => el_email = el} />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Input type="password" placeholder="password" innerRef={el => el_password = el} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="confirm password" innerRef={el => el_confirm_password = el} />
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
                            <p style={{ color: "red" }}>กรุณากรอกข้อมูลให้ถูกต้อง</p>
                        </ModalBody>
                    </Modal>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
})