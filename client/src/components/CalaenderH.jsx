import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css'


const CalaenderH = (props) => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);



  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);

  };

  const event = props.event
  // get all booeh date from db  start/end dates from db and disable them all 
  const getAllDays = (data) => {

    let bookedDays = []
    for (let item in data) {
      const date_s = new Date(data[item].start_date.toString().split('-').join(','))
      const date_e = new Date(data[item].end_date.toString().split('-').join(','))

      if (!(bookedDays.includes(date_s)) ) {
        bookedDays.push(date_s)
        bookedDays.push(date_e)
      }
    }

    return bookedDays
  }
// change the selected date format to a psql acceptable format 
  const handleBookaDay =() =>{
 
    const start_Date = moment(checkInDate).format().slice(0,10)

  }
  handleBookaDay()

  
  const allBookedDays = getAllDays(event)
  // console.log(allBookedDays)

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

      </div>


      {checkInDate && (
        <div className="summary">
          <p>
            You book an event from {moment(checkInDate).format("LL")} to{" "} .
          </p>
        </div>
      )}

      <button onSubmit={handleBookaDay} style={{ margin: '2em' }} class="btn btn-outline-light btn-lg px-5" type="submit"> Submit </button>
    </div>


  );
};

export default CalaenderH;