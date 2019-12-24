import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Container } from 'reactstrap'
import bestculling from '../images/bestculling.jpg'

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
                    <p>
                        With the Stencil One release behind us, we’re seeing developers build lots of successful Stencil-based web components. Now that the dust has settled, we realized it was time to talk about what’s next for the future of the project.
                    </p>
                    <Link to="/">
                            อ่านเพิ่มเติม
                    </Link>
                </div>
            </Container>

        </Fragment>
    )
}