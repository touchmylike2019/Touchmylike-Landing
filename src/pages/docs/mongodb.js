import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import {
    Container
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

export default () => {
    return (
        <Fragment>
            {/* <Header /> */}
            <Container>
                <div className="docs">
                    <h2 style={{ textAlign: "center" }}>MongoDB</h2>
                    <h3 className="mt-5">พื้นฐานของ MongoDB</h3>
                    <ul className="mt-3">
                        <Link to="/documents/mongodb/overview"><li>เเนะนำ MongoDB เบื้องต้น</li></Link>
                        <Link to="/documents/mongodb/data_model"><li>Data Modelling</li></Link>
                        <Link to="/documents/mongodb/create_database"><li>Create Database</li></Link>
                        <li>Drop Database</li>
                        <li>Create Collection</li>
                        <li>Drop Collection</li>
                        <li>Datatypes</li>
                        <li>Insert Document</li>
                        <li>Query Document</li>
                        <li>Update Document</li>
                        <li>Delete Document</li>
                        <li>Projection</li>
                        <li>Limit Records</li>
                        <li>Sort Records</li>
                        <li>Indexing</li>
                        <li>Aggregation</li>
                        <li>Replication</li>
                        <li>Sharding</li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}