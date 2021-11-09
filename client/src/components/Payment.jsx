import './payment.css'
import { Link } from 'react-router-dom'
import { atom , useRecoilValue } from 'recoil'
import { eventId as eventIdAtom } from './atoms'
import useApplicationData from '../hooks/useApplicationData'
import {Button} from 'react-bootstrap'
import axios from 'axios'


function Payment() {
    const { user } = useApplicationData()
    const event = useRecoilValue(eventIdAtom)
    const event_id = event.id;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello")
        const event_booking = {
          user_id: user.user_id,
          event_id: event_id,
          confirmation: 'pending'
        }
        console.log("event booking", event_booking)
        axios({
          method: 'POST',
          url: "/api/event_bookings",
          data: event_booking
        })
          .then(resp => {
            console.log("response from event booking ", resp)
            axios.get("/api/event_bookings")
              .then(res => {
                const data = res.data
                const book_event = data[data.length - 1]
                console.log("book event", book_event)
                const payment = {
                    event_booking_id: book_event.id,
                    status_of_payment: 'pending'
                }
                axios({
                    method: 'POST',
                    url: "/api/payments",
                    data: payment
                  })
                  .then(resp => {
                      console.log("response from payment", resp)
                  })
              })
          })
    
      }


    return (
        <div className="payment-gradient">
        <div className="container payment-container ">
        {/* <div className="payment-container"> */}
            <div className="container p-0" >
                <form onSubmit={handleSubmit}>
                <div className="card px-4 mt-5">
                    <p className="h8 py-3 mt-3" style={{color:'black'}}><h3>Payment Details</h3></p>
                    <div className="row gx-3">
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Person Name</p> <input className="form-control mb-3" type="text" placeholder="Name" value={user.name} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p> <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p> <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p> <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <Link to="/eventconfirmation" className="btn btn-primary mb-3 fs-5 fw-5" >
                            <Button type="submit" >
                                Process payment
                            </Button>
                        </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}


export default Payment