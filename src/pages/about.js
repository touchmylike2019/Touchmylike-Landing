import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Container } from 'reactstrap'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="docs">
                    <h1>มาม่า...</h1>
                </div>
            </Container>
        </Fragment>
    )
}