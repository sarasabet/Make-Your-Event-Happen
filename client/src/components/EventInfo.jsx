import {Button, Form, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import './eventinfo.css' 
function EventInfo(props) {
  return (
    <div className="bg-container">
      <Container>
      <Row>
        <Col s={8} md={8}>
        <div className="event-card">
      <Form onSubmit={handleSubmit} id="event-info" autoComplete="off">
          <Form.Group controlId="eventName" >
            <Form.Label>Event Name</Form.Label>
            <Form.Control  placeholder="" />
            <Form.Text className="text-muted">
              Please enter the name best describe your event 
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="eventDescription" >
            <Form.Label>Event Description</Form.Label>
            <Form.Control as='textarea' />
            <Form.Text className="text-muted">
              Please enter the description of your event
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="eventImage" >
            <Form.Label>Event Image</Form.Label>
            <Form.Control  type="file" />
            <Form.Text className="text-muted">
              Please select the image for your event 
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="invitees" >
            <Form.Label>Number of Invitees</Form.Label>
            <Form.Control  placeholder="" />
          </Form.Group>

          <Form.Group controlId="eventPurpose" className="mt-3">
            <Form.Label>Event Purpose</Form.Label>
            <Form.Control as='select'>
              <option value=''>Select a Purpose:</option>
              <option value='personal'>Personal</option>
              <option value='charity'>Charity</option>
              <option value='community'>Community</option>
              <option value='others'>Others</option>            
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="eventTerms" className="mt-3" >
            <Form.Check  type='checkbox'  label='terms and conditions'/>
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

          <Button className="mt-5" type='submit'>Submit Review</Button>
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