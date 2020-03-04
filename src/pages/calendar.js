import React, { Fragment } from 'react'
import Calendar from '../components/calendar/Calendar'
import Footer from '../components/Footer'
import plus from '../font-awesome/plus-solid.svg'

export default () => {

    return (
        <Fragment>
            <Calendar />
                <img src={plus} width="30px" style={{position: "absolute", top: "550px", right: "30px"}}/>
            <Footer />
        </Fragment>
    )
}