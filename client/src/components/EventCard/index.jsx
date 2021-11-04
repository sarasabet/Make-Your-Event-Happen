import './eventcard.css'
import {Link} from 'react-router-dom'
import ShowOneEvent from '../ShowOneEvent'

function EventCard(props) {
  const timeDisplay = {0: '0', 9: '9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
  const handleClick =(e) => {
    console.log(e.target)
  }
  return (


    <div className="card">   
  
    <Link to = {`/ShowOneEvent/${props.event.id}`}>  
      <img className="card--img" src = {props.event.image} />
     </Link> 
      <div className="card-text">
        {props.event.name} 
        <p>On {props.event.start_date} at {timeDisplay[Number(props.event.start_time.substr(11,2))]}  onwards </p> 
      </div>
    </div>  
)
}

export default EventCard