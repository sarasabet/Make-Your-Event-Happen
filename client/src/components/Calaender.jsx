import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'
import { Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

const Calender = (props) => {
  // define check-in and check-out state
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  const { state, handleCheckInDate, handleCheckOutDate } = useApplicationData()
  // define handler change function on check-in date


  const event = props.event
  const getAllDays = (data) => {

    let bookedDays = []
    for (let item in data) {
      const date_s = new Date(data[item].start_date.toString().split('-').join(','))
      const date_e = new Date(data[item].end_date.toString().split('-').join(','))

      if (!(bookedDays.includes(date_s)) || !(bookedDays.includes(date_e))) {
        bookedDays.push(date_s)
        bookedDays.push(date_e)
      }
    }

    return bookedDays
  }

  const handleBookaDay = () => {

    const start_Date = moment(state.start_date).format().slice(0, 10)
    const end_Date = moment(state.end_date).format().slice(0, 10)
    // console.log('here', start_Date, end_Date)
  }
  handleBookaDay()

  // define handler change function on check-out date




  const allBookedDays = getAllDays(event)
  console.log('state on Calender', state)
  const highlightDates=allBookedDays
  return (
    <div id='calender'>
      <h3> Please select a day </h3>

      <div className="input-container">
        <div>
          <label>Start Day</label>
          <DatePicker
            selected={state.start_date}
            minDate={new Date()}
            onChange={handleCheckInDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}
            isClearable
            highlightDates={highlightDates}


          />
        </div>
        <div>
          <label>End Day</label>
          <DatePicker
            selected={state.end_date}
            minDate={state.start_date}
            onChange={handleCheckOutDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}
            isClearable
            highlightDates={highlightDates}
          />
        </div>
      </div>


      {state.start_date && state.end_date && (
        <div className="summary">
          <p>
            You book an event from {moment(state.start_date).format("LL")} to{" "}
            {moment(state.end_date).format("LL")}.
          </p>
        </div>
      )}
        <div>
         
       To process your event booking please Login/ Signup
      </div>
      <Link to="/signin"class="btn btn-outline-light btn-s px-4">Signin</Link>
      <Link to='/signup' class="btn btn-outline-light btn-s px-4">Signup</Link>

    </div>


  );
};

export default Calender;