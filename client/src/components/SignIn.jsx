import './signin.css'
import {
  Link
} from "react-router-dom";


function SignIn() {
  return(

<section className="vh-100 gradient-custom" style={{marginTop: '100px'}}>
<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card  text-white" style={{borderRadius: "1rem", backgroundColor: "black"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Signin</h2>
              <p className="text-white-50 mb-5">Please enter your signin and password!</p>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />    
              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <Link className="btn btn-outline-light btn-lg px-5"  to="/eventinfo">Signin</Link>
    

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <Link ></Link>
              <p className="mb-0">Don't have an account?<Link to="/signup" className="text-white-50 fw-bold">Sign up </Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default SignIn