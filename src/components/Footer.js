import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogoutRequest } from '../store/actions/usersActions'
import {
    Row, Col
} from 'reactstrap'
import home from '../font-awesome/home-solid.svg'
import book from '../font-awesome/book-solid.svg'
import blogger from '../font-awesome/blogger-brands.svg'
import user from '../font-awesome/user-alt-solid.svg'
import passport from '../font-awesome/passport-solid.svg'
import key from '../font-awesome/key-solid.svg'
import check from '../font-awesome/user-check-solid.svg'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.users.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogoutRequest: () => dispatch(userLogoutRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(({ isAuthenticated, userLogoutRequest }) => {
    const userLink = (
        <Fragment>
            <Row>
                <Col><Link to="/"><img className="mt-1" width="35" src={home} alt="home" /></Link></Col>
                <Col><Link to="/documents"><img className="mt-2" width="25" src={book} alt="book" /></Link></Col>
                <Col><Link to="/blog"><img className="mt-1" width="30" src={blogger} alt="blogger" /></Link></Col>
                <Col><Link to="/account"><img className="mt-1" width="30" src={user} alt="user" /></Link></Col>
                <Col><Link to="/about"><img className="mt-1" width="25" src={passport} alt="passport" /></Link></Col>
            </Row>
            <Row>
                <Col><p>หน้าหลัก</p></Col>
                <Col><p>เอกสาร</p></Col>
                <Col><p>บทความ</p></Col>
                <Col><p>ทั่วไป</p></Col>
                <Col><p>เกี่ยวกับ</p></Col>
            </Row>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <Row>
                <Col><Link to="/"><img className="mt-1" width="35" src={home} alt="home" /></Link></Col>
                <Col><Link to="/blog"><img className="mt-2" width="25" src={book} alt="book" /></Link></Col>
                <Col><Link to="/login"><img className="mt-1" width="30" src={key} alt="blogger" /></Link></Col>
                <Col><Link to="/signup"><img className="mt-1" width="35" src={check} alt="user" /></Link></Col>
                <Col><Link to="/about"><img className="mt-1" width="25" src={passport} alt="passport" /></Link></Col>
            </Row>
            <Row>
                <Col><p>หน้าหลัก</p></Col>
                <Col><p>บทความ</p></Col>
                <Col><p>เข้าสู่ระบบ</p></Col>
                <Col><p>สมัครสมาชิก</p></Col>
                <Col><p>เกี่ยวกับ</p></Col>
            </Row>
        </Fragment>
    )
    return (
        <div className="footer">
            {isAuthenticated ? userLink : guestLinks}
        </div>
    )
})