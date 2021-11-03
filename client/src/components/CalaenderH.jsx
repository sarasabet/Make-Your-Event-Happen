import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'
import SelectHourDay from "./SelectHourDay";
import axios from 'axios'
import SelectHour from "./SelectHour";
import { Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { startDate as startDateAtom,  endDate as endDateAtom, startTime as startTimeAtom,  endTime as endTimeAtom} from './atoms'

const CalaenderH = (props) => {
 
  const [eventTime, setEventTime] = useState([]);
  const [startDate, setStartDate] = useRecoilState(startDateAtom)
  const [endDate, setEndDate] = useRecoilState(endDateAtom)
  const startTime = useRecoilValue(startTimeAtom)
  const endTime = useRecoilValue(endTimeAtom)
 
  const minTime = 2
  useEffect(() => {
    const url = `api/events/`
    console.log("url....", url)
    const params = {}
    // const checkInDate = state.start_date
    if (startDate) params['start_date'] = `${moment(startDate).format().slice(0,10)}`
    axios.get("api/events" , {params})
      .then(res => {     
        const data = res.data
       const times = []

        let prev_time = 8
        if(Array.isArray(data) && data.length) {
          for(let item in data) {
            const start_time = Number((data[item].start_time.substr(11,8)).substr(0,2))
            const end_time   = Number((data[item].end_time.substr(11,8)).substr(0,2))
            if (start_time - prev_time > minTime  ) {    
              times.push({start_time: prev_time+1, end_time: start_time-1, canBook: true})
              times.push({start_time, end_time, canBook: false})
            } else {
              times.push({start_time, end_time, canBook: false})
            }
            prev_time = end_time
            // console.log("prev time..", prev_time)
          }
          const end_time = times[times.length-1].end_time
          if((end_time !== 24) && ((24 - end_time) > minTime)) {
            times.push({start_time: prev_time+1, end_time: 24, canBook: true})
          }
        } else {

          times.push({start_time: prev_time+1, end_time: 24, canBook: true})
        }           
         setEventTime(times)         
      })

  }, [startDate])
  console.log("event Calender", eventTime)
  // console.log("Time...", time)

  const handleCheckInDate = (date) => {
    // setCheckInDate(prev =>  date);
    setStartDate(prev => date)
    setEndDate(prev => date)
  };


   const event = props.event
  // get all booeh date from db  start/end dates from db and disable them all 
  
  const getAllDays = (data) => {

    let bookedDays = []
    for (let item in data) {
      const date_s = new Date(data[item].start_date.toString().split('-').join(','))
      const date_e = new Date(data[item].end_date.toString().split('-').join(','))

      if (!(bookedDays.includes(date_s)) ) {
        const start_time = data[item].start_time.substr(11,8)
        const end_time   = data[item].end_time.substr(11,8)
        if( start_time === '09:00:00' && end_time === '00:00:00') {    
          bookedDays.push(date_s)
          bookedDays.push(date_e)
        }    
      }
    }

    return bookedDays
  }
// change the selected date format to a psql acceptable format 
  const handleBookaDay =() =>{
 
    const start_Date = moment(startDate).format().slice(0,10)

  }
  handleBookaDay()

  
  const allBookedDays = getAllDays(event)
  // const time = getTime(data)
  // // console.log(allBookedDays)
  const highlightDates=allBookedDays
  return (
    <div id='calender'>
      <h3> Please select a day </h3>

        <div>
          <label>Start Day</label>
          <DatePicker
            selected={startDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}
            highlightDates={highlightDates}
          />
        </div>
        <div >
      <h1>Book Your Event</h1>
      <div className="container">
      {
          // events.map((event, index) => <SelectHour  start_time={event.start_time} end_time={event.end_time} time={time} prev_time={events[index-1]}  minTime={minTime} onClick={onSlectTime}/> )
          eventTime.map((event, index) => <SelectHour key={index}  start_time={event.start_time} end_time={event.end_time} canBook={event.canBook}  minTime={minTime} getInfo={props.getInfo} /> )
      }
      </div>
    </div>
      {startDate && (
        <div className="summary">
          <p>
            You book an event for {moment(startDate).format("LL")} to{" "} 
            at start-time: {startTime} to {endTime}
          </p>
        </div>
      )}
      <br/><br/>
      <div>
       To process your event booking please Login/ Signup
      </div>
      <Link to="/signin"class="btn btn-outline-light btn-s px-4">Signin</Link>
      <Link to='/signup' class="btn btn-outline-light btn-s px-4">Signup</Link>
 
    </div>
  );
};

export default CalaenderH;