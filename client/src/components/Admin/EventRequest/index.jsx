import './eventrequest.css'
 function EventRequest(props) {
  return (
    <div className="main-container">
      <div className="event-txt"> 
      <p><h4> Hi There {props.name}
        {props.desc}
        {props.date}
        {props.start_time}
        {props.end_time}</h4> </p>
      </div>
      <div className="event-btn mt-4">
        <button className="btn btn-dark btn-md  me-3">Accept Request</button>
        <button className="btn btn-dark btn-md">Reject Request</button>
      </div>
    </div>
  )
}

export default EventRequest