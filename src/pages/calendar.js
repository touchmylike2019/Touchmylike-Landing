import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Container } from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './calendar.scss'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="blog">
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
                </div>
            </Container>

        </Fragment>
    )
}