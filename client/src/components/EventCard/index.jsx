import './eventcard.css'
import {Link} from 'react-router-dom'
import ShowOneEvent from '../ShowOneEvent'

function EventCard(props) {
  const handleClick =(e) => {
    console.log(e.target)
  }
  return (


    <div className="card">   
  
    <Link to = {`/ShowOneEvent/${props.event.id}`}>  
      <img className="card--img" src = {props.event.img} />
     </Link> 
      <div className="card-text">
        {props.event.name} 
        <p>On 31st October 2021
         at 7pm onwards</p>

      </div>
    </div>  
)
}

export default EventCard