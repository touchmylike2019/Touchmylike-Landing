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

export default () => {
    return (
        <Fragment>
            <Container>
                <div className="docs">
                    <h3 style={{ textAlign: "center" }}>Create Database</h3>
                    <hr />
                </div>
                <h4>The use Command</h4>
                <p>MongoDB <b>use DATABASE_NAME</b> is used to create database. The command will create a new database if it doesn't exist, otherwise it will return the existing database.</p>
                <h5>Syntax</h5>
                <p>Basic syntax of use DATABASE statement is as follows −</p>
                <SyntaxHighlighter language="bash" style={vs2015}>
                    {`use DATABASE_NAME`}
                </SyntaxHighlighter>
                <h5>Example</h5>
                <p>If you want to use a database with name <b>{`<mydb>`}</b>, then <b>use DATABASE</b> statement would be as follows −</p>
                <SyntaxHighlighter language="bash" style={vs2015}>
                    {`>use mydb
switched to db mydb`}
                </SyntaxHighlighter>
                <p>To check your currently selected database, use the command <b>db</b></p>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {`>db
mydb`}
                </SyntaxHighlighter>
                <p>If you want to check your databases list, use the command show dbs.</p>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {`>show dbs
local     0.78125GB
test      0.23012GB`}
                </SyntaxHighlighter>
                <p>Your created database (mydb) is not present in list. To display database, you need to insert at least one document into it.</p>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {`>db.movie.insert({"name":"tutorials point"})
>show dbs
local      0.78125GB
mydb       0.23012GB
test       0.23012GB`}
                </SyntaxHighlighter>
                <p style={{marginBottom: "100px"}}>In MongoDB default database is test. If you didn't create any database, then collections will be stored in test database.</p>
            </Container>
            <Footer />
        </Fragment>
    )
}