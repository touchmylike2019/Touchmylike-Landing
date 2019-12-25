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
                        <span>อาจเป็นพวกคุณทุกคนจะรู้สึกถึงความคิดถึงเกี่ยวกับการผ่านไปในปี 2020 ไม่ว่าเราจะพูดถึงชีวิตการทำงานและชีวิตส่วนตัวของคุณ ตอนนี้สิ่งต่างๆส่วนใหญ่เปลี่ยนไป ดังนั้นมาลองใช้ความรู้สึกนั้นกับเราและเข้าสู่ปีใหม่ปี 2020</span>
                    </p>
                    <Link to="/blog/happy-new-year-2020">
                            อ่านเพิ่มเติม
                    </Link>
                </div>
            </Container>

        </Fragment>
    )
}