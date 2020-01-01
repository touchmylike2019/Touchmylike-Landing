import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import { Container } from 'reactstrap'
import bestculling from '../../images/bestculling.jpg'
import hny from '../../images/hny.jpg'

export default () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className="blog">
                    <h1>Happy New Year 2020</h1>
                    <div className="profile">
                        <img src={bestculling} className="avatar" alt="happy new year 2020" />
                        <span>BESTCULLING | DECEMBER 25, 2019</span>
                    </div>
                    <img src={hny} className="article mt-4" alt="hny2020"/>
                    <p className="mt-5">
                        <span style={{marginLeft: "40px"}}>อาจเป็นพวกคุณทุกคนจะรู้สึกถึงความคิดถึงเกี่ยวกับการผ่านไปในปี 2020 ไม่ว่าเราจะพูดถึงชีวิตการทำงานและชีวิตส่วนตัวของคุณ ตอนนี้สิ่งต่างๆส่วนใหญ่เปลี่ยนไป ดังนั้นมาลองใช้ความรู้สึกนั้นกับเราและเข้าสู่ปีใหม่ปี 2020
    ความปรารถนาปีใหม่พิเศษสำหรับเพื่อนที่พิเศษมากมาในวิธีที่พิเศษมากการขอให้มีความสุขปีใหม่ 2020 ในวันที่พิเศษมาก!
    ขออวยพรให้คุณทุกสิ่งที่ดีในปีใหม่นี้!
    ขอให้สนุกความสุขความสงบความรักการดูแลโชคและความสำเร็จข้างหน้า!
    สวัสดีปีใหม่สวัสดีเพื่อน ๆ ทุกคน!
    ขอให้ปีใหม่ของคุณเต็มไปด้วยความสุขสนุกและสนุก
    ให้ทุกความฝันของคุณกลายเป็นความจริงที่สวยงาม!
    สวัสดีปีใหม่สำหรับคุณและครอบครัวของคุณ !!!
    ได้เวลาอธิษฐานสันติภาพเพื่อความสุข
    ความสำเร็จและความดีสำหรับทุกคน!
    สนุกไปกับเสียงหัวเราะเติมเต็มปีใหม่ในปี 2020!</span>                     
                    </p>
                </div>
            </Container>

        </Fragment>
    )
}