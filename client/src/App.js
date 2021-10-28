import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import Login from './components/Admin/LogIn'
import EventInfo from './components/EventInfo';
import SelectHourDay from './components/SelectHourDay';
// import Payment from './components/Payment';

import './App.css';

function App() {
  return (
    <div className="App">
    
      <SelectHourDay />
      {/* <EventInfo /> */}
      {/* <Login />
      <Admin /> */}
     {/* <Navigation/>
     <UpcomingEvents />
     <SelectBooking />
     <SignIn />
     <SignUp /> */}
    </div>
  );
}

export default App;
