import React, { useState, useEffect } from "react";
import useApplicationData from '../hooks/useApplicationData'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import moment from 'moment'
import './EventSummary.css'
import { Link} from "react-router-dom";


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

  const handelPrice =(total) => {
    setFinalPrice(total)
  }

  console.log('finalprice',finalPrice)
  const total = claculateTotalPrice(total_hours, total_days)
  return (

    <div class='event-summary'>
      <h4>
        Dear {user.name}, please review your event order bellow:
      </h4>
      <Card style={{ width: '50rem' }}>
        <Card.Header>Event Summary</Card.Header>
        <ListGroup variant="flush">

          <ListGroup.Item>Start date: {moment(state.start_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>End date: {moment(state.end_date).format("LL")}</ListGroup.Item>
          <ListGroup.Item>Start time :{state.start_time}</ListGroup.Item>
          <ListGroup.Item>End time :{state.end_time} </ListGroup.Item>
          <ListGroup.Item>{state.description} in</ListGroup.Item>
          <ListGroup.Item>Total : {total}</ListGroup.Item>

        </ListGroup>
        <Link  className='bookevent-btn md fluid'onClick={handelPrice} to="/payment">Process Payment</Link>
      </Card>
    </div>

  )

}

export default EventSummary