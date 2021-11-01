import './eventcard.css'
import {Link} from 'react-router-dom'
import ShowOneEvent from '../ShowOneEvent'

function EventCard(props) {

  const handleClick = (e) => {
   
    props.onClick(e)
  }
  return (

    <div className="card">   
    <Link to="/ShowOneEvent">  
      <img className="card--img" src = {props.event.img} onClick={handleClick} id={props.event.id}/>
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