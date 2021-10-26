import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <UpcomingEvents />
     <SelectBooking />
     <SignIn />
     <SignUp />
    </div>
  );
}

export default App;
