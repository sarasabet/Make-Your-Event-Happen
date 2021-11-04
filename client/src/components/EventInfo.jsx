
import { Button, Form, Row, Col, Accordion } from 'react-bootstrap'
import './eventinfo.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { eventId as eventIdAtom, desc as descAtom, eventType as eventTypeAtom, purpose as purposeAtom, startDate as startDateAtom, endDate as endDateAtom, startTime as startTimeAtom, endTime as endTimeAtom } from './atoms'

function EventInfo(props) {

  const startDate = useRecoilValue(startDateAtom)
  const endDate = useRecoilValue(endDateAtom)
  const startTime = useRecoilValue(startTimeAtom)
  const endTime = useRecoilValue(endTimeAtom)
  const [desc, setDesc] = useRecoilState(descAtom)
  const [purpose, setPurpose] = useRecoilState(purposeAtom)
  const [eventType, setEventType] = useRecoilState(eventTypeAtom)
  const [eventId, setEventId] = useRecoilState(eventIdAtom)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("I am theer")
    const state = {
      start_date: startDate,
      end_date: endDate,
      start_time: `${startTime}:00:00`,
      end_time: `${endTime}:00:00`,
      event_type_id: eventType,
      description: desc,
      purpose: purpose,
      is_active: 'false',
    }
    console.log("State data", state)

    axios({
      method: 'POST',
      url: "/api/events",
      data: state
    })
      .then(resp => {
        console.log("response: ", resp)
        axios.get("/api/events")
          .then(res => {
            const data = res.data
            console.log("data", data[data.length - 1])
            setEventId(prev => data[data.length - 1])
          })
      })

  }
  function handleOnNameChange(e) {
    setEventType(prev => e.target.value)
  }
  function handleOnDescChange(e) {
    setDesc(prev => e.target.value)
  }
  function handleOnPurposeChange(e) {
    setPurpose(prev => e.target.value)
  }

  return (
    <div className="event-container">
      {/* <Container> */}
        <Row>
          <Col  md={9}>
            <div className="event-card">

              <Form id="event-info" autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group controlId="eventName" >
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control as='select' name="eventName"  onChange={handleOnNameChange}>
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
                  <Form.Control as='textarea' name="eventDescription"  onChange={handleOnDescChange} value={desc} />
                  <Form.Text className="text-muted" >
                    Please enter the description of your event
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="eventImage" >
                  <Form.Label>Event Image</Form.Label>
                  <Form.Control name="eventImage" type="file" />
                  <Form.Text className="text-muted">
                    Please select the image for your event
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="invitees" >
                  <Form.Label>Number of Invitees</Form.Label>
                  <Form.Control placeholder="" name="invitees" />
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
                  <Form.Check type='checkbox' name="eventTerms" label='terms and conditions' />
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
                <Button type="submit" className="btn btn-primary mb-5 mt-5 fs-5 fw-5 pt-2" style={{marginLeft: '8em'}}>
                  Place your Event Request
                </Button>
              <Link to="/eventsummary" >
                Review Event Summry
              </Link>
              
            </Form>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
    {/* </Container> */}
        </div > 
  )
}

export default EventInfo