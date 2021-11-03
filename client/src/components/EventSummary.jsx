import React, { useState, useEffect } from "react";
import useApplicationData from '../hooks/useApplicationData'
import Card from 'react-bootstrap/Card'
import { ListGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import './EventSummary.css'
import { Link } from "react-router-dom";
import axios from 'axios'


function EventSummary(props) {
  const [finalPrice, setFinalPrice] = useState([]);
  const { state, user, startHandleSelect } = useApplicationData()
  console.log(state, user, startHandleSelect)
  const start_date = moment(state.start_date).format().slice(0, 10).split('-').join('')
  const end_date = moment(state.end_date).format().slice(0, 10).split('-').join('')
  const total_hours = state.end_time - state.start_time;
  const total_days = end_date - start_date;
  const price = 200

  const claculateTotalPrice = (total_hours, total_days) => {
    let total_price;
    if (state.start_time && !state.end_time) {
      total_price = (total_days + 1) * price * 14
    }
    else {
      total_price = total_hours * price;
    }
    return total_price
  }
  

  const handelClick = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: "/api/events",
      data:state
    })


  }


  const total = claculateTotalPrice(total_hours, total_days)
  return (

    <div class='event-summary'>

      <Card style={{ width: '80rem' }}>
      <h4>
        Dear {user.name}, please review your event order:
      </h4><br /><br /><br />
        <h3>Event Summary</h3>
        <ListGroup variant="flush"><br />
          <ListGroup.Item>Start date: {moment(state.start_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>End date: {moment(state.end_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>Start time :{state.start_time}</ListGroup.Item>
          <ListGroup.Item>End time :{state.end_time} </ListGroup.Item>
          <ListGroup.Item>{state.description} in</ListGroup.Item>
          <h3 style={{color:"tomato"}}> Total : {total}</h3>

        </ListGroup><br /><br /><br />
        {/* <Link  className='bookevent-btn md fluid' type="submite"onClick={handelClick} to="/payment">Process Payment</Link> */}
        <button className='bookevent-btn md fluid' type='submit' onClick={handelClick}>submite</button>
      </Card>
    </div>

  )

}

export default EventSummary