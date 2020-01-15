import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import {
    Container,
    Row
} from 'reactstrap'
import cpp from '../images/cpp.png'
import sfml from '../images/sfml.png'
import mongodb from '../images/mongodb.png'
import Documents from '../components/documents/Documents'

export default () => {
    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="docs">
                    <h1 style={{ textAlign: "center" }}>เอกสาร</h1>
                    <Row>
                        <Documents link="/documents/mongodb" location={mongodb} title="MongoDB" category="Database" />
                        <Documents link="/documents/cpp" location={cpp} title="C++" category="Programming Language" />
                        <Documents link="/documents/sfml" location={sfml} title="SFML" category="Library/Framework" />
                    </Row>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}