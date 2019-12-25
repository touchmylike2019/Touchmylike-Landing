import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import {
    Container,
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'
import cpp from '../images/cpp.png'
import sfml from '../images/sfml.png'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="docs">
                    <h1>เอกสาร</h1>
                    <Row>
                        <Col xs="12">
                            <Card className="mt-4">
                                <CardImg top width="100%" src={cpp} alt="C++" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">C++</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>อ่านเพิ่มเติม</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12">
                            <Card className="mt-4">
                                <CardImg top width="100%" src={sfml} alt="sfml" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">SFML</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>อ่านเพิ่มเติม</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}