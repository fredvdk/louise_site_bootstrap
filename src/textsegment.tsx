import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import './App.css';


function TextSegment(props: { text: string, image: string, imgleft: boolean }){
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);


    if (props.imgleft) {
    return (
        <Container>
            <Row>
                <Col lg={true} >
                    <div className="textpadding">{newText}</div>
                </Col>
                <Col lg={true} >
                    <Image src='/images/Louise.jpeg' fluid rounded/>
                </Col>
            </Row>
        </Container>
    );}
    else {
        return (
            <Container>
            <Row>
                <Col lg={true} >
                    <Image src='/images/Louise.jpeg' fluid rounded/>
                </Col>
                <Col lg={true} >
                    <div className="textpadding">{newText}</div>
                    
                </Col>
            </Row>
        </Container>
        );}
}

export default TextSegment;
