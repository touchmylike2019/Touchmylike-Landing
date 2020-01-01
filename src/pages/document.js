import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import {
    Container,
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap'
import cpp from '../images/cpp.png'
import sfml from '../images/sfml.png'
import mongodb from '../images/mongodb.png'
import Documents from '../components/documents/Documents'

export default () => {
    return (
        <Fragment>
            <Header />
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
        </Fragment>
    )
}