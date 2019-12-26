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
    const codeString = ''
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="docs">
                    <h3 style={{ textAlign: "center" }}>โครงสร้างของโปรเเกรม</h3>
                    <hr />
                </div>
                <p>
                    วิธีที่ดีที่สุดในการเรียนรู้ programming languages คือ การเขียนโปรเเกรม ในการเขียนโปรเเกรมครั้งเเรกส่วนใหญ่มักจะเเสดงผลข้อความง่ายๆ
                    ออกมาทางหน้าจอ เช่น "Hello World" เเม้ว่ามันจะดูเหมือนง่าย เเต่ก็มีองค์ประกอบพื้นฐานทั้งหมดที่โปรเเกรม C++ มี:
                </p>
                <Row>
                    <Col><SyntaxHighlighter language="cpp" style={vs2015} showLineNumbers>
                        {`// my first program in C++         
#include <iostream>
int main() {
    std::cout << "Hello World!";
}
                            `}
                    </SyntaxHighlighter></Col>
                    <Col><p>Hello World!</p></Col>
                </Row>
            </Container>
        </Fragment>
    )
}