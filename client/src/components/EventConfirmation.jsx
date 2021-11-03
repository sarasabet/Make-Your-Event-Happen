import { Card, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './EventConfirmation.css'
function EventConfirmation(props) {

  return (
    <div class='event-summary'>

    <Card style={{ width: '80rem' }}>
  
      <h3>THANK YOU!</h3>
      <ListGroup variant="flush"><br />
        <ListGroup.Item></ListGroup.Item><br />
      <h4> Ypur event has been successfuly booked , you will be notified shortly!</h4>
        <ListGroup.Item></ListGroup.Item>
      

      </ListGroup><br /><br /><br />
      <Link to="/calender">Make Anothjer Event</Link>
      <Link to="/">Home </Link>
     
    </Card>
  </div>

  )

}

export default EventConfirmation