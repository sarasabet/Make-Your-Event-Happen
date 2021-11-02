import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
export default function useApplicationData(props) {
  const date = new Date()
  // const date = moment(date_s).format().slice(0,10)
  const [state, setState] = useState({
    event_type_id: 1,
    description: "", 
    invitees: 0,
    purpose: "",
    terms: false,
    user_id: 1,
    start_date: date,
    end_date: date,
    start_time: '09',
    end_time: '',
    is_active:   'true',
  });

const [user, setUser] = useState({
  user_id: 1,
  name: "Bob",
  email: "Bob@gmail.com"
})
  // console.log("State use", state)
  const timeDisplay = {9:'9 AM', 10: '10 AM' , 11: '11 AM', 12: '12 AM', 13: '1 PM', 14: '2 PM', 15: '3 PM', 16: '4 PM', 17: '5 PM', 18: '6 PM', 19: '7 PM', 20: '8 PM', 21: '9 PM', 22: '10 PM', 23: '11 PM', 24: '12 PM' }
 
  function checkTime(e) {
    let time_part = Number(e.substr(0,2))
    const format_part = e.slice(-2)
    if (format_part === 'PM')
    {
      time_part += 12
    } 
    return time_part
  }

  function startHandleSelect(e) {

    e = checkTime(e)
    setState(prev => ({...prev, start_time: e}))
  }

  const endHandleSelect=(e)=>{
    e = checkTime(e)
    setState(prev => ({...prev, end_time: e}))
    console.log("end time", state.end_time)
  }
  const handleCheckOutDate = (date) => {
    // setCheckOutDate(date);
    setState(prev => ({...prev, end_date: date}))
  };
  const handleCheckInDate = (date) => {
    // setCheckInDate(prev =>  date);
    setState(prev => ({...prev, start_date: date}))
    setState(prev => ({...prev, end_date: date}))
  };
  function handleOnNameChange(e) {
    setState({ ...state, event_type_id: e.target.value})
    // console.log(e.target.value)
    console.log("target name", e.target.name)
  }
  function handleOnDescChange(e) {
    setState({ ...state, description: e.target.value})
    // console.log(e.target.value)
  }
  function handleOnPurposeChange(e) {
    setState({ ...state, purpose: e.target.value})
    // console.log(e.target.value)
  }
  function handleOnInviteesChange(e) {
    setState({ ...state, invitees: e.target.value})
    // console.log(e.target.value)
  }
  function handleOnTermChange(e) {
    setState({ ...state, terms: e.target.value})
    // console.log(e.target.value)
  }
  return { state , user, startHandleSelect, handleCheckInDate, endHandleSelect, handleCheckOutDate, handleOnNameChange,handleOnDescChange,handleOnPurposeChange,handleOnInviteesChange,handleOnTermChange,timeDisplay};

} 
