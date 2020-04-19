import React, { Fragment, useState } from 'react'
import {
    Container,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Row,
    Form, FormGroup, Label, Input
} from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './calendar.scss'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default () => {

    const [modal, setModal] = useState(false)
    const [date, setDate] = useState()
    const toggle = () => setModal(!modal)

    const handleEventClick = (info) => {
        toggle()
    }

    const info_events = [
        {
            title: 'ติดตั้ง wordpress',
            date: '2020-04-04'
        },
    ]


    return (
        <Fragment>
            <Container>
                <div className="calendar">
                    <FullCalendar
                        height={800}
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin, interactionPlugin]}
                        dateClick={handleEventClick}
                        events={info_events} />
                </div>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader>เพิ่มข้อมูลงาน</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <Label>ชื่อเรื่อง</Label>
                                    <Input type="text" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>วันที่เริ่มต้น</Label>
                                </FormGroup>
                                <DatePicker
                                    className="form-control"
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    required
                                />
                                <FormGroup className="mt-4">
                                    <Label>คำอธิบาย</Label>
                                    <Input type="text" />
                                </FormGroup>
                            </Form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={ handleEventClick }>ยืนยัน</Button>{' '}
                        <Button color="danger" onClick={toggle}>ยกเลิก</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </Fragment>
    )
}