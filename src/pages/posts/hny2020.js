import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Container } from 'reactstrap'
import bestculling from '../../images/bestculling.jpg'
import hny from '../../images/hny.jpg'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="blog">
                    <h1>Happy New Year 2020</h1>
                    <div className="profile">
                        <img src={bestculling} className="avatar" />
                        <span>BESTCULLING | DECEMBER 25, 2019</span>
                    </div>
                    <img src={hny} className="article mt-4"/>
                </div>
            </Container>

        </Fragment>
    )
}