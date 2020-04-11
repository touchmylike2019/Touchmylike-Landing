import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Container, Row, Col } from 'reactstrap'
import virus from '../images/virus.jpg'
import Footer from '../components/Footer'

export default () => {
    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="about">
                    <Row>
                        <Col xl="5" md="5">
                            <img width="100%" src={virus} alt="touchmylike" />
                        </Col>
                        <Col xl="7" md="7">
                            <p className="mt-5">เราเป็นเพียงคนกลุ่มเล็กๆ ที่ต้องการศึกษาเเละพัฒนาเทคโนโลยี เราจึงสร้าง web application นี้เพื่อมีไว้เเบ่งปันข้อมูลซึ่งกันเเละกัน เเละ นำความรู้มาผลิตเป็นผลงานออกมา</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}