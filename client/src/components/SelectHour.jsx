import { useEffect, useState } from 'react'
import './selecthour.css'
import { Dropdown} from 'react-bootstrap'

function SelectHour(props) {
  const minTime = props.minTime;
  let time = '9'
  const [value,setValue]=useState(time);
  const [endvalue,setEndvalue]=useState('');


  const timeDisplay = {9:'9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
 
  function checkTime(e) {
    let time_part = Number(e.substr(0,2))
    const format_part = e.slice(-2)
    if (format_part === 'PM')
    {
      time_part += 12
    } 
    return time_part
  }

  function startHandleSelect(e) {

    e = checkTime(e)
    setValue(prev =>  e);
  }

  const endHandleSelect=(e)=>{
    e = checkTime(e)
    setEndvalue(prev => e )
  }
 
  let booking_slot;  
 
  function createStartItems() { 
    let items = [];  
    booking_slot = props.start_time    
    while (booking_slot <= props.end_time - props.minTime) {
      items.push(timeDisplay[booking_slot])
      booking_slot += 1;
    }
    return items;
  }  

  function createEndItems() { 
    let end_time = props.end_time 
    let booking_slot =  Number(value) + minTime
    let items = [];       
      while (end_time >= booking_slot) {
        items.push(timeDisplay[booking_slot])
        booking_slot += 1;
    }
    return items; 
  }  

  const booking_start_time = createStartItems()
  const booking_end_time = createEndItems()



  return (
    <>
    <div>
      { props.canBook ? 
        <div className="canbook" >
          <p className="pt-3"> You can book for {timeDisplay[props.start_time]} to {props.end_time} </p>
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
      :
        <div className='cannotbook'>
          <h1 className="pt-3">Booked</h1>
          start_time: {timeDisplay[props.start_time]} 
          end_time: {timeDisplay[props.end_time]}
        </div>
      }    

      </div>
      end time {endvalue}
    </>
  )

}

export default SelectHour