import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
import './selectbooking.css'
function SelectBooking(props) {

  return (
    <div className="book-container">
      <h1>Book Your Event</h1>
      <div class="d-grid gap-4 col-3 mx-auto mt-5 ">
        <Link  to="/selecthours" class="btn btn-light fs-5 fw-bolder" >Book for hour/s</Link>
        <Link  to="/selectdays" class="btn btn-light fs-5 fw-bolder" >Book for day/s</Link>

      </div>
    </div>
  )

}

export default SelectBooking