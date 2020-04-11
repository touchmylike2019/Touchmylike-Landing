import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Container,
    Alert,
} from 'reactstrap'
import Footer from '../components/Footer'
import touchmylike from '../images/home_tml.png'
import virus from '../images/fight-virus.jpg'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated
    }
}

export default connect(mapStateToProps)(() => {
    return (
        <Fragment>
            <Container className="mt-3">
                <Alert color="primary">
                    Blog: <Link to="/blog/happy-new-year-2020">Happy New Year 2020 ></Link>
                </Alert>
                <div className="layer mt-4">
                    <h1 style={{ fontWeight: "bold" }}>Touchmylike</h1>
                    <h4 style={{ fontWeight: "bold" }}>Leaning skill technology</h4>
                    <img width="100%" src={virus} alt="touchmylike" />
                    <p className="mt-4">
                        ในโลกปัจจุบันเทคโนโลยีนั้นเปลี่ยนอยู่ทุกวัน ฉะนั้นเเล้วเราจึงต้องพัฒนาทักษะตนเองอยู่เสมอ เพื่อพร้อมต่อการเปลี่ยนเเปลงของโลกยุคใหม่
                    </p>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
})