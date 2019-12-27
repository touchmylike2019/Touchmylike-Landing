import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import {
    Container,
    Button,
    Row, Col
} from 'reactstrap'
import account from '../font-awesome/user-circle-solid.svg'

const mapStateToProps = state => {
    return {
        authenticatedUsername: state.users.authenticatedUsername
    }
}

export default connect(mapStateToProps)(({ authenticatedUsername }) => {

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
                            <h2><b>{ authenticatedUsername }</b></h2>
                        </Col>
                    </Row>
                    <Button className="edit-profile mt-4">เเก้ไขโปรไฟล์</Button>
                </div>
            </Container>
        </Fragment>
    )
})