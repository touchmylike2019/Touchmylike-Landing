import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Footer from '../../components/Footer'
import rdbms from '../../images/rdbms.png'

export default () => {
    return (
        <Fragment>
            <Container>
                <div className="docs">
                    <h3 style={{ textAlign: "center" }}>Data Modelling</h3>
                    <hr />
                </div>
                <p>
                    Data in MongoDB has a flexible schema.documents in the same collection. They do not need to have the same set of fields or structure, and common fields in a collection’s documents may hold different types of data.
                </p>
                <h4>Some considerations while designing Schema in MongoDB</h4>
                <ul>
                    <li>Design your schema according to user requirements.</li>
                    <li>Combine objects into one document if you will use them together. Otherwise separate them (but make sure there should not be need of joins).</li>
                    <li>Duplicate the data (but limited) because disk space is cheap as compare to compute time.</li>
                    <li>Do joins while write, not on read.</li>
                    <li>Optimize your schema for most frequent use cases.</li>
                    <li>Do complex aggregation in the schema.</li>
                </ul>
                <h4>Example</h4>
                <p>Suppose a client needs a database design for his blog/website and see the differences between RDBMS and MongoDB schema design. Website has the following requirements.</p>
                <ul>
                    <li>Every post has the unique title, description and url.</li>
                    <li>Every post can have one or more tags.</li>
                    <li>Every post has the name of its publisher and total number of likes.</li>
                    <li>Every post has comments given by users along with their name, message, data-time and likes.</li>
                    <li>On each post, there can be zero or more comments.</li>
                </ul>
                <p>In RDBMS schema, design for above requirements will have minimum three tables.</p>
                <img src={rdbms} width="100%"/>
                <p>While in MongoDB schema, design will have one collection post and the following structure −</p>
                <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers>
                    {`{
   _id: POST_ID
   title: TITLE_OF_POST, 
   description: POST_DESCRIPTION,
   by: POST_BY,
   url: URL_OF_POST,
   tags: [TAG1, TAG2, TAG3],
   likes: TOTAL_LIKES, 
   comments: [	
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES 
      },
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      }
   ]
}
    `}
                </SyntaxHighlighter>
                <p style={{ marginBottom: "100px" }}>So while showing the data, in RDBMS you need to join three tables and in MongoDB, data will be shown from one collection only.</p>
            </Container>
            <Footer />
        </Fragment>
    )
}