
import {Button, Form, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import './eventinfo.css' 
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import useApplicationData from "../hooks/useApplicationData";
function EventInfo(props) {
  const { state, handleOnNameChange,handleOnDescChange,handleOnPurposeChange,handleOnInviteesChange,handleOnTermChange } = useApplicationData()
  console.log("STate:", state)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("data", state)
    axios({
      method: 'POST',
      url: "/api/events",
      data:  state
    })
    .then(resp => {
      console.log("response: ", resp)
    })

  }



  return (
    <div className="bg-container">
      <Container>
      <Row>
        <Col s={8} md={8}>
        <div className="event-card">
 
      <Form id="event-info" autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group controlId="eventName" >
            <Form.Label>Event Name</Form.Label>
            <Form.Control as='select' name="eventName" onChange={handleOnNameChange}>
              <option value=''>Select Event Type</option>
              <option value='1'>Dance</option>
              <option value='2'>Cooking</option>
              <option value='3'>Painting</option>
              <option value='4'>Music</option>            
            </Form.Control>
            <Form.Text className="text-muted"  >
              Please enter the name best describe your event 
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="eventDescription" >
            <Form.Label>Event Description</Form.Label>
            <Form.Control as='textarea' name="eventDescription" type="text" onChange={handleOnDescChange} value={state.description} />
            <Form.Text className="text-muted" >
              Please enter the description of your event
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="eventImage" >
            <Form.Label>Event Image</Form.Label>
            <Form.Control name="eventImage"  type="file" />
            <Form.Text className="text-muted">
              Please select the image for your event 
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="invitees" >
            <Form.Label>Number of Invitees</Form.Label>
            <Form.Control  placeholder="" name="invitees" onChange={handleOnInviteesChange} />
          </Form.Group>

          <Form.Group controlId="eventPurpose" className="mt-3">
            <Form.Label>Event Purpose</Form.Label>
            <Form.Control as='select' name="eventPurpose" onChange={handleOnPurposeChange}>
              <option value=''>Select a Purpose:</option>
              <option value='personal'>Personal</option>
              <option value='charity'>Charity</option>
              <option value='community'>Community</option>
              <option value='others'>Others</option>            
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="eventTerms" className="mt-3" >
            <Form.Check  type='checkbox' name="eventTerms" value={state.terms}  label='terms and conditions' onChange={handleOnTermChange}/>
          </Form.Group>

            <Accordion defaultActiveKey="0">
            <Accordion.Item >
              <Accordion.Header>Terms and Conditions</Accordion.Header>
              <Accordion.Body style={{color:"black"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Link to='/payment'className="mt-5"  > Submit Review</Link>
          {/* <Button className="mt-5" type='submit'>Submit Review</Button> */}
        </Form>
        </div>
            </Col>
            <Col>
            </Col>
          </Row>
    </Container>
        </div> 
  )
}

export default EventInfo