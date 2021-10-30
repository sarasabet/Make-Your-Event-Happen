import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'


const Calender = (props) => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);


  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
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

  const handleBookaDay =() =>{
 
    const start_Date = moment(checkInDate).format().slice(0,10)
    const end_Date = moment(checkOutDate).format().slice(0,10)
    console.log('here',start_Date, end_Date) 
  }
  handleBookaDay()

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  
  const allBookedDays = getAllDays(event)

  return (
    <div id='calender'>
      <h3> Please select a day </h3>

      <div className="input-container">
        <div>
          <label>Start Day</label>
          <DatePicker
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}


          />
        </div>
        <div>
          <label>End Day</label>
          <DatePicker
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
            dateFormat="MMMM, d, yyyy "
            placeholderText="Seelect start date"
            excludeDates={allBookedDays}

          />
        </div>
      </div>


      {checkInDate && checkOutDate && (
        <div className="summary">
          <p>
            You book an event from {moment(checkInDate).format("LL")} to{" "}
            {moment(checkOutDate).format("LL")}.
          </p>
        </div>
      )}

      <button onSubmit={handleBookaDay} style={{ margin: '2em' }} class="btn btn-outline-light btn-lg px-5" type="submit"> Submit </button>
    </div>


  );
};

export default Calender;