import moment from "moment";
const { atom } =require('recoil');


const date = new Date()
// const date = moment(date_s).format().slice(0,10)

export const startTime = atom({
  key: "start_time",
  default: '09',
})

export const endTime = atom({
  key: "end_time",
  default: '',
})

export const startDate = atom({
  key: "start_date",
  default: date,
})

export const endDate = atom({
  key: "end_date",
  default: date,
})

export const desc = atom({
  key: "description",
  default: '',
})

export const eventType = atom({
  key: "event_type",
  default: "",
})

export const purpose = atom({
  key: "purpose",
  default: "",
})

export const eventId = atom({
  key: "event_id",
  default: [],
})

export const eventRequests = atom({
  key: "event_req",
  default: [],
})

