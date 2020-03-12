import React, { Fragment } from 'react'
import Calendar from '../components/calendar/Calendar'
import Footer from '../components/Footer'
import plus from '../font-awesome/plus-solid.svg'

export default () => {

    return (
        <Fragment>
            <Calendar />
                <img 
                    src={plus} 
                    width="30px" 
                    style={{
                        zIndex: "1",
                        position: "absolute", 
                        top: "650px", 
                        right: "30px",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50px",
                        boxShadow: "1px 1px 10px #8f8989"
                    }}/>
            <Footer />
        </Fragment>
    )
}