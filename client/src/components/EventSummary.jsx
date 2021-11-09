import React, { useState, useEffect } from "react";
import useApplicationData from '../hooks/useApplicationData'
import Card from 'react-bootstrap/Card'
import { ListGroup, Button } from 'react-bootstrap'
import moment from 'moment'
import './EventSummary.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import { atom , useRecoilValue } from 'recoil'
import { eventId as eventIdAtom } from './atoms'



function EventSummary(props) {
  const event = useRecoilValue(eventIdAtom)
  const timeDisplay = {0: '0', 9: '9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  const { user } = useApplicationData()

  const start_date = moment(event.start_date).format().slice(0, 10).split('-').join('')
  const end_date = moment(event.end_date).format().slice(0, 10).split('-').join('')
  let start_time;
  let end_time
  if(event.start_time) {
    start_time = Number(event.start_time.substr(11,2))
    end_time = Number(event.end_time.substr(11,2))
  } else {
    start_time = 0
    end_time = 0
  }

  const total_hours = end_time - start_time
  const total_days = end_date - start_date;
  const price = 200

  const claculateTotalPrice = (total_hours, total_days) => {
    let total_price;
    if ((event.start_time === '09:00:00') && (event.end_time === '00:00:00')) {
      total_price = (total_days + 1) * price * 14
    }
    else {
      total_price = Number(total_hours * price);
    }
    return total_price
  }

  const total = claculateTotalPrice(total_hours, total_days)
  return (

    <div class='event-summary'>

      <Card style={{ width: '80rem' }}>
      <h4>
        Dear {user.name}, please review your event order:
      </h4><br /><br />
        <h3>Event Summary</h3>
        <ListGroup variant="flush"><br />
          <ListGroup.Item>Start date: {moment(event.start_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>End date: {moment(event.end_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>Start time :{timeDisplay[start_time]}</ListGroup.Item> 
          <ListGroup.Item>End time :{timeDisplay[end_time]}</ListGroup.Item> 
          <ListGroup.Item>{event.description} in</ListGroup.Item>
          <h3 style={{color:"tomato"}}> Total : {total}</h3>
          <p className="text-muted">cost per hour * total hour(200 * {total_hours} )</p>

        </ListGroup><br /><br /><br />
        <Link  className='bookevent-btn md fluid' type="submit" to="/payment">Process Payment</Link>
       
      </Card>
    </div>

  )

}

export default EventSummary