import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import {
    Container
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="docs">
                    <h2 style={{textAlign: "center"}}>ภาษา C++</h2>
                    <h3 className="mt-5">พื้นฐานของภาษา C++</h3>
                    <ul className="mt-3">
                        <Link to="/documents/cpp/structure"><li>โครงสร้างของโปรเเกรม</li></Link>
                        <li>ตัวเเปร เเละ ชนิดของข้อมูล</li>
                        <li>ค่าคงที่</li>
                        <li>ตัวดำเนินการ</li>
                        <li>Input/Output</li>
                    </ul>
                    <h3 className="mt-5">การเขียนโปรเเกรมเชิงโครงสร้าง</h3>
                    <ul className="mt-3">
                        <li>Control Structures</li>
                        <li>ฟังก์ชัน</li>
                        <li>Overloads เเละ templates</li>
                        <li>Name visibility</li>
                    </ul>
                </div>
            </Container>
        </Fragment>
    )
}