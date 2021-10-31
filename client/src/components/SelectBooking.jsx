import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
import './selectbooking.css'
function SelectBooking(props) {

  // const selectBooking=(e)=>{
  //   console.log("Helllooooo")
   
  // }
  return (
    <div className="book-container">
      <h1>Book Your Event</h1>
      <div class="d-grid gap-4 col-3 mx-auto mt-5 ">
        <Link  to="/selecthours" class="btn btn-light fs-5 fw-bolder" >Book for hour/s</Link>
        <Link  to="/selectdays" class="btn btn-light fs-5 fw-bolder" >Book for day/s</Link>
        {/* <button class="btn btn-light fs-5 fw-bolder" value = 'hour' onClick={(e) =>  props.onSelect(e)} type="Bookingbutton">Book for hour/s</button>
        <button class="btn btn-light fs-5 fw-bolder" value = 'day' onClick={(e) =>  props.onSelect(e)} type="button">Book for day/s</button> */}
      </div>
    </div>
  )

}

export default SelectBooking