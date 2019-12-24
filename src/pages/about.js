import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Container } from 'reactstrap'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="layer">
                    <h1>เกี่ยวกับ</h1>
                </div>
            </Container>
        </Fragment>
    )
}