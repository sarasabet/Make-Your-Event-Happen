import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import getDay from "date-fns/getDay";
import './Calender.css'

const Calender = () => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

//getDay get a date Oct.27.2021 and give back a number 0 to 6 according to that date
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
const bookedDays = [ new Date(),new Date(2021,9,30), new Date(2021,9,31), new Date(2021,10,3) ]
  
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
            excludeDates={bookedDays}

              
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
            excludeDates={bookedDays}
                         
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

      <button style={{margin:'2em'}} class="btn btn-outline-light btn-lg px-5" type="submit"> Submit </button>
    </div>


  );
};

export default Calender;