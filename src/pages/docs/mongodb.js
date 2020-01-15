import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import {
    Container
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

export default () => {
    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="docs">
                    <h2 style={{ textAlign: "center" }}>MongoDB</h2>
                    <h3 className="mt-5">พื้นฐานของ MongoDB</h3>
                    <ul className="mt-3">
                        <Link to="/documents/mongodb/overview"><li>เเนะนำ MongoDB เบื้องต้น</li></Link>
                    </ul>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}