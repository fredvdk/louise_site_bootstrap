import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
        
        <div className='footer'>
            <hr />
            <Row>
                <Col>
                <div className='leftside'>
                Louise Van de Kerckhove <br/>
                &#9742; 0468 14 00 01 <br/>
                Louis Leynstraat 1, 8800 Rumbeke <br/>
                &#x2709; <a href='mailto:louise.vdkerckhove@telenet.be'>Louise.vdkerckhove@telenet.be</a>
                </div>
                </Col>
                <Col>
                    <div className='rightside'>
                    <a href='https://www.vind-een-psycholoog.be/psycholoog/louise-van-de-kerckhove-torhout.html'>Vind een psycholoog</a> <br />
                    <Link to={{ pathname: "/privacy" }}>Privacy</Link> <br />
                    </div>
                </Col>
            </Row>
        </div>
    </>
    
  )
}
