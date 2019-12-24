import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import {
    Container,
    Button,
    Alert
} from 'reactstrap'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container className="mt-3">
                <Alert color="primary">
                    Blog: <Link to="/blog/happy-new-year-2020">Happy New Year 2020 ></Link>
                </Alert>
                <div className="layer mt-4">
                    <h1 style={{ fontWeight: "bold" }}>Leaning skill technology</h1>
                    <p className="mt-4">
                        ในโลกปัจจุบันเทคโนโลยีนั้นเปลี่ยนอยู่ทุกวัน ฉะนั้นเเล้วเราจึงต้องพัฒนาทักษะตนเองอยู่เสมอ เพื่อพร้อมต่อการเปลี่ยนเเปลงของโลกยุคใหม่
                    </p>
                    <Button color="primary" className="mt-4 p-3" style={{ width: "100%", fontWeight: "bold" }}>เริ่มกันเลย</Button>
                    <Button className="mt-4 p-3"
                        style={{ color: "rgb(76,72,255)", width: "100%", background: "#FFF", border: "none", boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", fontWeight: "bold" }}>
                        Touchmylike คืออะไร?
                    </Button>
                </div>
            </Container>
        </Fragment>
    )
}