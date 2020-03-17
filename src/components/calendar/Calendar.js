import React, { Fragment } from 'react'
import {
    Container
} from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './calendar.scss'

export default () => {

    // const [modal, setModal] = useState(false)
    // const [time, setTime] = useState({})
    // const toggle = (event, el) => {
    //     setModal(!modal)
    // }
    const handleEventClick = ({ event, el }) => {
        // setTime(event)
    }

    const info_events = [
        { 
            title: 'ติดตั้ง wordpress', 
            start: '2020-01-05'
        },
    ]


    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="calendar">
                    <FullCalendar
                        height={800}
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        eventClick={handleEventClick}
                        events={info_events} />
                </div>
                {/* <div>
                    <Modal isOpen={modal} className="mt-5">
                        <ModalHeader toggle={toggle}>{time.title !== null ? time.title : ""}</ModalHeader>
                    </Modal>
                </div> */}
            </Container>
        </Fragment>
    )
}