import React, { Fragment, useState } from 'react'
import Footer from '../components/Footer'
import {
    Container, Row,
    Form, FormGroup, Label, Input,
    Button
} from 'reactstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default () => {
    const [date, setDate] = useState()
    const handleSubmit = e => {
        alert("กำลังอัพเดต")
    }
    return (
        <Fragment>
            <Container>
                <div className="login">
                    <Form className="mt-5" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>ชื่อเรื่อง</Label>
                            <Input type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label style={{marginLeft: "150px"}}>วันที่เริ่มต้น</Label>
                            </Row>
                            <Row>
                              <DatePicker
                                className="form-control ml-5"
                                // name="time"
                                selected={date}
                                onChange={date => setDate(date)}
                                required
                            />  
                            </Row>
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Label>คำอธิบาย</Label>
                            <Input type="text" />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Button>สร้าง</Button>
                        </FormGroup>
                    </Form>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}