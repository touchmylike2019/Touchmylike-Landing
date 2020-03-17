import React, { Fragment } from 'react'
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
            <Container>
                <div className="docs">
                    <h1 style={{ textAlign: "center" }}>เอกสาร</h1>
                    <Row>
                        <Documents link="/documents/mongodb" location={mongodb} title="MongoDB" category="Database" />
                    </Row>
                    <Row>
                        <Documents link="/documents/cpp" location={cpp} title="C++" category="Programming Language" />
                    </Row>
                    <Row className="mb-5">
                        <Documents link="/documents/sfml" location={sfml} title="SFML" category="Library/Framework" />
                    </Row>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}