import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Container } from 'reactstrap'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="layer">
                    <h1>Build. Distribute. Adopt.</h1>
                    <p>
                    Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser.
                    </p>
                </div>
            </Container>
        </Fragment>
    )
}