import { useEffect, useState } from 'react'
import './selecthour.css'
import { Dropdown,  Select} from 'react-bootstrap'

function SelectHour(props) {
  const minTime = props.minTime;
  let time = '9'
  const [value,setValue]=useState(time);
  const [endvalue,setEndvalue]=useState();
  let booking_end_time ;

  const timeDisplay = {9:'9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  useEffect(() => {
    props.onClick(value, endvalue, props.id)
  }, [value, endvalue])

  function checkTime(e) {
    let time_part = Number(e.substr(0,2))
    const format_part = e.slice(-2)
    if (format_part === 'PM')
    {
      time_part += 12
    } 
    return time_part
  }
  const startHandleSelect=(e)=>{
    e = checkTime(e)
    setValue(prev => e);
  }

  const endHandleSelect=(e)=>{
    e = checkTime(e)
    setEndvalue(prev => e )
    // console.log("End value inside", endvalue);
  }

  const end_time = '24'
  const event_start_time = Number(props.start_time.substr(0,2))
  let canBook = false
 
  if(props.time.includes(props.id)) {
    canBook = true
    if(props.prev_time) {
      time = props.prev_time.end_time.substr(0,2)
    }
    console.log(props.prev_time)
  }

  
  let booking_slot;  
  let event_end_time = event_start_time - 1
  function createStartItems() { 
    let items = [];  
    booking_slot = event_end_time - time  
    let time_counter = Number(time)      
      while (booking_slot >= minTime) {
        items.push(timeDisplay[time_counter])
        time_counter += 1
        booking_slot -= 1;
    }
    return items;
  }  

  function createEndItems() { 
    let end_time = event_end_time 
    console.log("value..", value)
    let booking_slot =  Number(value) + minTime
    let items = [];       

      while (end_time >= booking_slot) {
        items.push(timeDisplay[booking_slot])
        booking_slot += 1;
    }

    return items; 
  }  

  const booking_start_time = createStartItems()
  booking_end_time = createEndItems()

  return (
    <>
    <div>
      { canBook && <div className="canbook" >
       <p className="pt-3"> You can book for {timeDisplay[Number(time)]} to {timeDisplay[event_end_time]} </p>
        <div className="time-select">
         <Dropdown onSelect={startHandleSelect} className="me-3">
            <Dropdown.Toggle variant="black" id="dropdown-basic" >
              Start Time
            </Dropdown.Toggle>
            <Dropdown.Menu >
              {booking_start_time.map(item => <Dropdown.Item eventKey={item} >{item}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={endHandleSelect}>
            <Dropdown.Toggle variant="black" id="dropdown-basic">
              End Time
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {booking_end_time.map(item => <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>  
      }

      <div className='cannotbook'>
        <h1 className="pt-3">Booked</h1>
         start_time: {timeDisplay[event_start_time]} 
         end_time: {timeDisplay[props.end_time]}
      </div>
     
      </div>
      {/* <h1> Value: {value}</h1> */}
    </>
  )

}

export default SelectHour