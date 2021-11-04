import './ShowOneEvent.css'
import Card from 'react-bootstrap/Card'

import { useState, useEffect } from "react"
import axios from 'axios'

function ShowOneEvent(props) {
  const [singleEvent, setSingleEvent] = useState([])
  const { id } = props.match.params
  const timeDisplay = {0: '0', 9: '9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  useEffect(() => {

    axios.get("http://localhost:3001/api/events")
      .then(res => {
        setSingleEvent(res.data[id - 1])
      })

  }, [])

  let end_time = Number(singleEvent.end_time.substr(11,2))
  if(!end_time) end_time = 24


  return (

    <div className="card-singleEvent">


      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Img variant="top" src={singleEvent.image} />
        <Card.Body>
          <Card.Title>{singleEvent.description}</Card.Title>
          <Card.Text>Start Date: {singleEvent.start_date}</Card.Text>
          <Card.Text>End DAte: {singleEvent.end_date}</Card.Text>
          <Card.Text>Start time: {timeDisplay[Number(singleEvent.start_time.substr(11,2))]}</Card.Text>
          <Card.Text>End time: {timeDisplay[end_time]}</Card.Text>

        </Card.Body>
      </Card>

    </div>
  )
}

export default ShowOneEvent