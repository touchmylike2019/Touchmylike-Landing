import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../components/calendar/Calendar'
import Footer from '../components/Footer'
import plus from '../font-awesome/plus-solid.svg'

export default () => {

    return (
        <Fragment>
            <Calendar />
            <Link to="add_time">
                <img
                    src={plus}
                    width="30px"
                    style={{
                        zIndex: "1",
                        position: "absolute",
                        top: "45px",
                        width: "35px",
                        right: "30px",
                    }} 
                    alt="add_time"/>
            </Link>
            <Footer />
        </Fragment>
    )
}