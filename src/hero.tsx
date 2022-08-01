import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Col, Image, Row } from 'react-bootstrap';
import Title from './title';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <div id='home' className='subheading'></div>
        <Title name="Welkom"/>
        <Container fluid>
            <Row>
                <Col >
                    <Image src='/images/Louise.jpeg' fluid rounded/>
                </Col>
                <Col>
                    <p> Mijn naam is <strong>Louise Van de Kerckhove</strong>, klinisch psycholoog en integratief therapeut i.o. Ik bied individuele therapie aan (jong)volwassenen en ouderen.
                    </p>
                    <Button variant='primary' onClick={() => navigate('/reservatie')}>Maak een afspraak</Button>
                </Col>
            </Row>

        </Container>
        </>
    );
}

export default Hero;