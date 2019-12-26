import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import {
    Container,
    Button,
    Row, Col
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
                <div className="account">
                    <Row>
                        <Col>
                            <img width="150px" src={account} alt="account" />
                        </Col>
                        <Col style={{marginTop: "20px"}}>
                            <h2><b>Touchmylike</b></h2>
                            <p>
                                Touchmylike Production
                            </p>
                            <p>
                                Our Service: Tutorial
                            </p>
                            <p>
                                Email: xxx@gmail.com
                            </p>
                        </Col>
                    </Row>
                    <Button className="edit-profile mt-4">เเก้ไขโปรไฟล์</Button>
                </div>
            </Container>
        </Fragment>
    )
}