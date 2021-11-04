
import './login.css'
import { Link } from 'react-router-dom'
function LogIn() {

  return (
    <div className="container" style={{height: "100vh", marginTop: '5em'}}>
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                        <div className="form-outline form-white mb-4">
                            <label className="form-label" for="typeEmailX">USER NAME</label>
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />    
                        </div>

                         <div className="form-outline form-white mb-4" styel={{color: 'white'}}>
                              <label className="form-label" for="typePasswordX">PASSWORD</label>
                             <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                        </div>
                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                <Link to='/admin' className="btn btn-outline-primary">LOGIN </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
  )
}

export default LogIn