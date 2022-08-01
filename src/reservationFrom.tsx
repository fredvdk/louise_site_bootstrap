import React, { useEffect, useState } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Button, ListGroup, ListGroupItem, InputGroup, Container, Alert } from 'react-bootstrap';
import { DtCalendar } from 'react-calendar-datetime-picker';
import './calendar.css';
import Title from './title';
import { useNavigate } from 'react-router-dom';
import Message from './message';

//google calendar REST api url
const baseUrl = "http://www.psycholooglouise.be:8080"

declare global {
    interface Date{
        formatdate: () => {};       
    }
}

Date.prototype.formatdate = function(){
    return {year: this.getFullYear(), month: this.getMonth()+1, day: this.getDate()}
  }

function ReservationForm(){
    const minDate = {year:(new Date()).getFullYear(), month:(new Date()).getMonth() + 1, day:(new Date()).getDate() + 2};  //min 48 from now
    const maxDate = {year:(new Date()).getFullYear(), month:(new Date()).getMonth() + 3, day:(new Date()).getDate()};  // two months ahead

    const [date, setDate] = useState(minDate);
    const [disableddates, setdisableddates] = useState([]);
   
    const [slots, setSlots] = useState([{slot: "", eventID:"", active:false}]);
    const [selectedSlot, setSelectedSlot] = useState("");

    const [naam, setNaam] = useState("");
    const [email, setEmail] = useState("");

    const [validated, setValidated] = useState(false);
    const [messageText, setmessageText] = useState("");
    const [showMessage, setshowMessage] = useState(false);
    const [messageVariant, setmessageVariant] = useState("");
    


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);

        if (selectedSlot == ""){
            setmessageText("Error : No date and time selected - 1");
            setmessageVariant("danger");
            setshowMessage(true);

            event.preventDefault();
            event.stopPropagation();
        }
    
        reserveer();
        event.stopPropagation();
      };

    useEffect(()=> {
        fetch(baseUrl + '/getdisableddates')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setdisableddates(data);
            })
            .catch(() => alert('no reservations possible - reservation server error'));
    }, [date]);

    
    function datechange(value){
        if (value !== undefined) {
            setDate(value);
        
            console.log(value);
            let d = value.day + "-" + value.month + "-" + value.year;
            fetch(baseUrl + '/getavailableslots?date=' + d)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setSlots(data);
                    setSelectedSlot("");
                })
                .catch(() => alert('no reservations possible - no calendar sync'));
        }
    }

    function setActiveSlot(id){       
        setSlots(slots.map(el => {
            if (el.eventID === id) {
                return {...el, active: true };
            }
            return {...el, active: false};}));
    }

    function reserveer(){
        if (selectedSlot !== "") {
            console.log("sending update request");
            fetch(baseUrl + '/updateevent?id=' + selectedSlot, { 
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({summary: naam, description: email})
                })
                        .then(response => response.json())
                        .then(data => {   
                            setmessageText('Reservatie aanvraag goed ontvangen ' + data);
                            setmessageVariant("success");
                            setshowMessage(true);
                            console.log(data);
                        })
                        .catch(() => {
                            setmessageText('Error: Cannot update calendar');
                            setmessageVariant("danger");
                            setshowMessage(true)
                        });
            }   
        else {
            setmessageText('Error: No date or time selected - 2');
            setmessageVariant('danger')
            setshowMessage(true);  
        }        
    }

    function clickSlot(value){
        setSelectedSlot(value.target.id);
        setActiveSlot(value.target.id);  
    }

    return (
    <>
    
    <div id='home' className='subheading'></div>
    <Title name='Reservaties' />
    
    <Message text={messageText} variant={messageVariant} show={showMessage} />

    <Form validated={validated} onSubmit={handleSubmit} >
        <FormGroup className='mb-3' as={Row}>
            <FormLabel column sm={2}>Naam</FormLabel>
            <Col sm={6}>
                <Form.Control 
                    required 
                    type='input' 
                    placeholder='Vul hier uw naam in'
                    onChange={(e) => setNaam(e.target.value)}
                    />
                <Form.Control.Feedback type='invalid'>
                    Graag je naam invullen
                </Form.Control.Feedback>
            </Col>
        </FormGroup>

        <FormGroup className='mb-3' as={Row}>
            <FormLabel column sm={2}>Email address</FormLabel>
            <Col sm={6}>
                <FormControl 
                    required
                    type='email' 
                    placeholder='Een geldig email adres'
                    onChange={(e) => setEmail(e.target.value)} />
                <Form.Control.Feedback type='invalid'>
                    Graag je emailadres invullen
                </Form.Control.Feedback>
            </Col>
            </FormGroup>

        
        <Row className="justify-content-md-center">
            <Col>
                
                    <DtCalendar
                    onChange={datechange}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disableddates}
                    />
                
            </Col>
            <Col>
                <ListGroup style={{border:'1px solid', height:'auto', width: 'auto', margin:'50px 150px 50px 50px'}}>
                    <div>
                    Tijdslots
                    </div>
                    {  
                    slots.map(item => 
                        (<ListGroupItem 
                            key={item.eventID}
                            id={item.eventID} 
                            active={item.active} 
                            onClick={clickSlot}>{item.slot}</ListGroupItem>))
                    }
                </ListGroup>

                <Button type="submit" variant='primary' style={{display:'center'}} >Reserveer</Button>
            </Col>
        </Row>
    </Form>
    
    </>
    )
}

export default ReservationForm;