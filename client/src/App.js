import Navigation from './components/Navigation';
import './App.css';
import HomePage from './components/HomePage';
import Contactus from './components/Contactus';
import EventInfo from './components/EventInfo'
import Signin from './components/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={HomePage}/>  
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/eventinfo" component={EventInfo} />
    
      </div>


    </Router>

  );
}

export default App;
