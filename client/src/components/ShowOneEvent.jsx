import './ShowOneEvent.css'
import Card from 'react-bootstrap/Card'

import { useState, useEffect } from "react"
import axios from 'axios'

function ShowOneEvent(props) {
  const [singleEvent, setSingleEvent] = useState([])
  const { id } = props.match.params

  useEffect(() => {

    axios.get("http://localhost:3001/api/events")
      .then(res => {
        setSingleEvent(res.data[id - 1])
      })

  }, [])

  return (

    <div className="card-singleEvent">


      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Img variant="top" src={singleEvent.image} />
        <Card.Body>
          <Card.Title>{singleEvent.description}</Card.Title>
          <Card.Text>Start Date: {singleEvent.start_date}</Card.Text>
          <Card.Text>End DAte: {singleEvent.end_date}</Card.Text>
          <Card.Text>Start time: {singleEvent.time}</Card.Text>
          <Card.Text>End time: {singleEvent.time}</Card.Text>

        </Card.Body>
      </Card>

    </div>
  )
}

export default ShowOneEvent