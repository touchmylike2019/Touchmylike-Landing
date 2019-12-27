import React, { useState } from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { connect } from 'react-redux'
import { userLogoutRequest } from '../../store/actions/usersActions'
import logo from '../../images/touchmylike_logo.png'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogoutRequest: () => dispatch(userLogoutRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(({ isAuthenticated, userLogoutRequest }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const userLink = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/documents">เอกสาร</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/blog">บทความ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about">เกี่ยวกับ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/account">บัญชีผู้ใช้</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/" onClick={() => userLogoutRequest()}>ออกจากระบบ</NavLink>
            </NavItem>
        </Nav>
    )
    const guestLinks = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/blog">บทความ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about">เกี่ยวกับ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login">เข้าสู่ระบบ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/signup">สมัครสมาชิก</NavLink>
            </NavItem>
        </Nav>
    )

    return (
        <Container>
            <Navbar light expand="md">
                <NavbarBrand href="/" style={{ color: "#000000" }}>
                    <img src={logo} width="40" />
                    Touchmylike
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {isAuthenticated ? userLink : guestLinks}
                </Collapse>
            </Navbar>
        </Container>
    )
})