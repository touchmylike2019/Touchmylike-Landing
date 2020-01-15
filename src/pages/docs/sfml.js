import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import {
    Container
} from 'reactstrap'
import Footer from '../../components/Footer'

export default () => {
    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="docs">
                    <h2 style={{textAlign: "center"}}>กำลังดำเนินการ...</h2>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}