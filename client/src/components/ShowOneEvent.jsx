import './ShowOneEvent.css'
import Card from 'react-bootstrap/Card'

import { useState, useEffect } from "react"
import axios from 'axios'

function ShowOneEvent(props) {
  const [singleEvent, setSingleEvent] = useState([])
  const { id } = props.match.params
  const timeDisplay = {0: '12 PM', 9: '9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  useEffect(() => {
    const url = `/api/events/${id}`
    axios.get(url)
      .then(res => {
        const time = res.data
        setSingleEvent(time)
      })
     
  }, [])

  return (

    <div className="card-singleEvent">
      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Img variant="top" src={singleEvent.image} />
        <Card.Body>
          <Card.Title>{singleEvent.description}</Card.Title>
          <Card.Text>Start Date: {singleEvent.start_date}</Card.Text>
          <Card.Text>End Date: {singleEvent.end_date}</Card.Text>
         { singleEvent.start_time &&
         <div>
            <Card.Text>Start time: {timeDisplay[Number(singleEvent.start_time.substr(11,2))]}</Card.Text> 
            <Card.Text>End time: {timeDisplay[Number(singleEvent.end_time.substr(11,2))]}</Card.Text> 
          </div>
         } 

        </Card.Body>
      </Card>

    </div>
  )
}

export default ShowOneEvent