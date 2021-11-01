import { Button, Form, Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import './eventinfo.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function EventInfo(props) {

  const [state, setState] = useState({
    name: "",
    description: "",
    image: "",
    invitees: 0,
    purpose: "",
    terms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.currentTarget)
    const data = new FormData(e.currentTarget)
    console.log(state)
    // formSubmit(e.target)
  }

  //   }
  // function formSubmit(formData) {
  //   const data = new FormData(formData)
  //   await fetch("http://localhost:3001/event_info", {
  //     method: "POST",
  //     mode: "cors",
  //     body: data
  //   }).then(response => response.json())
  //   .then(response => props.updateEventInfo(response))
  // }
  function handleOnNameChange(e) {
    setState({ ...state, name: e.target.value })
    console.log(e.target.value)
  }
  function handleOnDescChange(e) {
    setState({ ...state, description: e.target.value })
    console.log(e.target.value)
  }
  function handleOnPurposeChange(e) {
    setState({ ...state, purpose: e.target.value })
    console.log(e.target.value)
  }
  function handleOnInviteesChange(e) {
    setState({ ...state, invitees: e.target.value })
    console.log(e.target.value)
  }
  function handleOnTermChange(e) {
    setState({ ...state, terms: e.target.value })
    console.log(e.target.value)
  }

  return (
    <div className="bg-container">
      <Container>
        <Row>
          <Col s={8} md={8}>
            <div className="event-card">
              {/* <Form 
      // onSubmit={handleSubmit} id="event-info" autoComplete="off"
     /> */}

              <Form id="event-info" autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group controlId="eventName" >
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control as='select' onChange={handleOnNameChange}>
                    <option value=''>Select Event Type</option>
                    <option value='Dance'>Dance</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Painting'>Painting</option>
                    <option value='Music'>Music</option>
                  </Form.Control>
                  <Form.Text className="text-muted"  >
                    Please enter the name best describe your event
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="eventDescription" >
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control as='textarea' name="name" type="text" onChange={handleOnDescChange} value={state.description} />
                  <Form.Text className="text-muted" >
                    Please enter the description of your event
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="eventImage" >
                  <Form.Label>Event Image</Form.Label>
                  <Form.Control type="file" />
                  <Form.Text className="text-muted">
                    Please select the image for your event
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="invitees" >
                  <Form.Label>Number of Invitees</Form.Label>
                  <Form.Control placeholder="" onChange={handleOnInviteesChange} />
                </Form.Group>

                <Form.Group controlId="eventPurpose" className="mt-3">
                  <Form.Label>Event Purpose</Form.Label>
                  <Form.Control as='select' onChange={handleOnPurposeChange}>
                    <option value=''>Select a Purpose:</option>
                    <option value='personal'>Personal</option>
                    <option value='charity'>Charity</option>
                    <option value='community'>Community</option>
                    <option value='others'>Others</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="eventTerms" className="mt-3" >
                  <Form.Check type='checkbox' value={state.terms} label='terms and conditions' onChange={handleOnTermChange} />
                </Form.Group>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item >
                    <Accordion.Header>Terms and Conditions</Accordion.Header>
                    <Accordion.Body style={{ color: "black" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Link className="mt-5">
          <Button className="mt-5" type='submit'>Submit Review</Button>
            </Link>
          </Form>
        </div>
      </Col>
      <Col>
      </Col>
    </Row>
    </Container >
        </div > 
  )
}

export default EventInfo