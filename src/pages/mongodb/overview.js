import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="docs">
                    <h3 style={{ textAlign: "center" }}>เเนะนำ MongoDB เบื้องต้น</h3>
                    <hr />
                </div>
                <p>
                    <b>MongoDB</b> คือ cross-platform, document oriented database ที่ให้ ประสิทธิภาพสูง, ความพร้อมใช้งานสูง และ ขยายขีดความสามารถได้ง่าย MongoDB ทำงานบน concept ของ collection เเละ document
                </p>
                <p>
                    <b>Database</b> คือ physical container สำหรับ collections แต่ละฐานข้อมูลจะได้รับชุดไฟล์ของตัวเองในระบบไฟล์ เเละ เซิร์ฟเวอร์ MongoDB เดียว จะมีฐานข้อมูลได้หลายฐานข้อมูล
                </p>
                <p>
                    <b>Collection</b> คือกลุ่มของ MongoDB documents ซึ่งคล้ายกับตาราง(RDBMS) มีการรวบรวมอยู่ในฐานข้อมูลเดียว Collections ไม่บังคับใช้ schema เเละ Documents ภายใน collection สามารถมี fields ต่างกัน Typically, all documents in a collection are of similar or related purpose.
                </p>
                <p>
                    Document
    A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.
                </p>
                <p>The following table shows the relationship of RDBMS terminology with MongoDB.</p>
                {/* <Row>
                    <Col><SyntaxHighlighter language="cpp" style={vs2015} showLineNumbers>
                        {`// my first program in C++         
#include <iostream>
int main() {
    std::cout << "Hello World!";
}
                            `}
                    </SyntaxHighlighter></Col>
                    <Col><p>Hello World!</p></Col>
                </Row> */}
            </Container>
        </Fragment>
    )
}