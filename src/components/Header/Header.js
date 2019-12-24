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
import logo from '../../images/touchmylike_logo.png'

export default () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Container>
            <Navbar light expand="md">
                <NavbarBrand href="/" style={{color: "#000000"}}>
                    <img src={logo} width="50"/>
                    Touchmylike
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">เอกสาร</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">บทความ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">เกี่ยวกับ</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}