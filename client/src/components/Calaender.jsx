import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'
import { Link } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { startDate as startDateAtom,  endDate as endDateAtom, startTime as startTimeAtom,  endTime as endTimeAtom} from './atoms'

const Calender = (props) => {

  const [startDate, setStartDate] = useRecoilState(startDateAtom)
  const [endDate, setEndDate] = useRecoilState(endDateAtom)
  const [startTime, setStartTime] = useRecoilState(startTimeAtom)
  const [endTime, setEndTime] = useRecoilState(endTimeAtom)


  const handleCheckOutDate = (date) => {
    setStartTime('09')
    setEndTime('24')
    setEndDate(prev => date)
  };

  const handleCheckInDate = (date) => {
    setStartTime('09')
    setEndTime('24')
    setStartDate(prev => date)
  };

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

    const start_Date = moment(startDate).format().slice(0, 10)
    const end_Date = moment(endDate).format().slice(0, 10)
  }
  handleBookaDay()


  const allBookedDays = getAllDays(event)

  const highlightDates=allBookedDays
  return (
    <div id='calender' style={{height: '60vh'}}>
      <h3 style={{marginTop: '1em'}}> Please select a day </h3>

      <div className="input-container">
        <div>
        <label style={{marginTop: '.5em', marginBottom: '.5em'}}>Start Day</label>
          <DatePicker
            selected={startDate}
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
          <label style={{marginTop: '.5em', marginBottom: '.5em'}}>End Day</label>
          <DatePicker
            selected={endDate}
            minDate={startDate}
            onChange={handleCheckOutDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}
            isClearable
            highlightDates={highlightDates}
          />
        </div>
      </div>


      {startDate && endDate && (
        <div className="summary">
           <br /><br/> 
            You book an event from {moment(startDate).format("LL")} to{" "}
            {moment(endDate).format("LL")}.
          <div>
    
         <p>To process your event booking please Login/ Signup</p>
        </div>
        <Link to="/signin" className="btn btn-outline-light btn-m px-4 mb-2">Signin</Link>
         <Link to='/signup' className="btn btn-outline-light btn-m px-4">Signup</Link>
        </div>
      )}
    </div>


  );
};

export default Calender;