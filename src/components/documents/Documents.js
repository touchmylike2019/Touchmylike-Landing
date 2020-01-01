import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap'

export default ({ link, location, title, category }) => {
    return (
        <Col xs="12">
            <Link to={link}>
                <Card style={{ textAlign: "center", color: "#000" }} className="mt-4">
                    <CardImg top src={location} alt={title} />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{title}</CardTitle>
                        <CardText>{category}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}