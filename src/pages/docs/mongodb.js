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
                        <Link to="/"><li>Create Database</li></Link>
                        <Link to="/"><li>Drop Database</li></Link>
                        <Link to="/"><li>Create Collection</li></Link>
                        <Link to="/"><li>Drop Collection</li></Link>
                        <Link to="/"><li>Datatypes</li></Link>
                        <Link to="/"><li>Insert Document</li></Link>
                        <Link to="/"><li>Query Document</li></Link>
                        <Link to="/"><li>Update Document</li></Link>
                        <Link to="/"><li>Delete Document</li></Link>
                        <Link to="/"><li>Projection</li></Link>
                        <Link to="/"><li>Limit Records</li></Link>
                        <Link to="/"><li>Sort Records</li></Link>
                        <Link to="/"><li>Indexing</li></Link>
                        <Link to="/"><li>Aggregation</li></Link>
                        <Link to="/"><li>Replication</li></Link>
                        <Link to="/"><li>Sharding</li></Link>
                    </ul>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}