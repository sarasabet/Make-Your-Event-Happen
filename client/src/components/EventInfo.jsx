
import {Button, Form, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import './eventinfo.css' 
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function EventInfo(props) {
  
  const [state, setState] = useState({
    event_type_id: 0,
    description: "",
    event_image_id: 1,
    invitees: 0,
    purpose: "",
    terms: false,
    start_date: '2021-11-04',
    end_date:   '2021-11-04',
    start_time: '09:00:00',
    end_time:   '11:00:00',
    is_active:   'true',
  });

   const handleSubmit = (e) => {
//     e.preventDefault()
//     fetch(`http://localhost:3001/api/events`)
//     .then(resp => resp.json())
//     .then(data => {
//         // handling errors if any.
//         if (data.error){
//             this.setState({ error: data.error })
//         } else {
//             this.setState({ recipes: data })
//         }
//     })

// }
    e.preventDefault()
    console.log("data", state)
    axios({
      method: 'POST',
      url: "/api/events",
      data:  state 
    })
    // axios.put('http://localhost:3001/api/events', { state })
    .then(resp => {
      console.log("response: ", resp)
    })

  }

  function handleOnNameChange(e) {
    setState({ ...state, name: e.target.value})
    console.log(e.target.value)
  }
  function handleOnDescChange(e) {
    setState({ ...state, description: e.target.value})
    console.log(e.target.value)
  }
  function handleOnPurposeChange(e) {
    setState({ ...state, purpose: e.target.value})
    console.log(e.target.value)
  }
  function handleOnInviteesChange(e) {
    setState({ ...state, invitees: e.target.value})
    console.log(e.target.value)
  }
  function handleOnTermChange(e) {
    setState({ ...state, terms: e.target.value})
    console.log(e.target.value)
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
            <Form.Control as='select' onChange={handleOnNameChange}>
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
            <Form.Control as='textarea' name="name" type="text" onChange={handleOnDescChange} value={state.description} />
            <Form.Text className="text-muted" >
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
            <Form.Control  placeholder="" onChange={handleOnInviteesChange} />
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
            <Form.Check  type='checkbox' value={state.terms}  label='terms and conditions' onChange={handleOnTermChange}/>
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