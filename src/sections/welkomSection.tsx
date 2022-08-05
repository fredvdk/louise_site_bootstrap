import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/welkom.css";
import Title from '../title';

const WelkomSection = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <div id='home' className='subheading'></div>

        <Title name='Welkom' />        
        <div className="hero">

            <img src='/images/hero.jpg' className='backgroundimage'/>
            <div className="toptext">
                Mijn naam is <strong>Louise Van de Kerckhove</strong>, klinisch psycholoog en integratief therapeut i.o. Ik bied individuele therapie aan (jong)volwassenen en ouderen.
            </div>
            <img src='/images/Louise.jpeg' className='bottomleft'/>
            <Button id='welkombtn' size='lg' className="bottomright" variant='primary' onClick={() => navigate('/aanmelden')}>Afspraak maken</Button>
        </div>

        <div id='home' className='subheading'></div>
        <Title name='Contact' />
        <div className='text'>
            <p>U kunt mij altijd contacteren per mail of telefoon. Verder werk ik enkel op afspraak, het adres van mijn praktijk is Louis Leynstraat 1, 8800 Rumbeke.</p>
        </div>
        
        <div className='googlemap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.43705902052!2d3.1468993157489673!3d50.93412977954501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c336646d7cf1a5%3A0xb2cbc5ba75906c49!2sLouis%20Leynstraat%201%2C%208800%20Roeselare!5e0!3m2!1sen!2sbe!4v1659549508107!5m2!1sen!2sbe" width="50%" height="200"></iframe>
        </div>
    
        </>
    );
}

export default WelkomSection;