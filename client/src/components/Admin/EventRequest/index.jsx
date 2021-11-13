import './eventrequest.css'
import {Link } from 'react-router-dom'
 function EventRequest(props) {
  
  
  return (
    <div className="main-container">
      <div className="event-txt"> 
      <p><h4> Request for {props.name} event </h4></p>
       <p> <h5>{props.desc}</h5> </p>
       <table className="d-flex justify-content-center">
         <tr>
         <td className="d-flex justify-content-center">
         {props.date} 
       </td>
       <td className="p-2">
       {props.start_time}
       </td>
       <td className="p-2">
       {props.end_time} 
       </td>
       </tr>
       </table>       
      </div >
      <div className="d-flex flex-row mt-3">
      {/* <div className="event-btn mt-4"> */}
      <Link to='/' className="btn btn-dark btn-md  me-3">Accept Request</Link>
        <button className="btn btn-dark btn-md">Reject Request</button>
      {/* </div> */}
      </div>

    </div>
  )
}

export default EventRequest