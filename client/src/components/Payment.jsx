import './payment.css'
import { Link } from 'react-router-dom'
import useApplicationData from '../hooks/useApplicationData'
function Payment() {
  
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    
    //     const state = {
    //       start_date: startDate,
    //       end_date: endDate,
    //       start_time: `${startTime}:00:00`,
    //       end_time: `${endTime}:00:00`,
    //       event_type_id: eventType,
    //       description: desc,
    //       purpose: purpose,
    //       is_active: 'false',
    //     }
    //     console.log("State data", state)
    
    //     axios({
    //       method: 'POST',
    //       url: "/api/events",
    //       data: state
    //     })
    //       .then(resp => {
    //         console.log("response: ", resp)
    //         axios.get("/api/events")
    //           .then(res => {
    //             const data = res.data
    //             console.log("data", data[data.length - 1])
    //             setEventId(prev => data[data.length - 1])
    //           })
    //       })
    
    //   }


    return (

        <div className="payment-container">
            <div className="container p-0" >
                <div className="card px-4">
                    <p className="h8 py-3">Payment Details</p>
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
                            {/* <Link to="/">
                                <div className="btn btn-primary mb-3"> <span className="ps-3">Pay $243</span> <span className="fas fa-arrow-right"></span> </div>
                            </Link> */}
                            <Link to="/eventconfirmation" className="btn btn-primary mb-3">>
                                <button type="submit">
                                   PRocess payment
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Payment