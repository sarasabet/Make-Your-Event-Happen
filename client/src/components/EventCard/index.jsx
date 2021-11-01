import './eventcard.css'
function EventCard(props) {
  const handleClick =(e) => {
    console.log(e.target)
  }
  return (
    <div className="card">     
      <img className="card--img" src = {props.image}  onClick={handleClick}/>
      <div className="card-text">
        {props.name} 
        <p>On 31st October 2021
         at 7pm onwards</p>

      </div>
    </div>  
)
}

export default EventCard