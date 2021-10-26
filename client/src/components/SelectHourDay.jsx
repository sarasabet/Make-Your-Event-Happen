

import React, { useState } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';


function SelectHourDay() {
  const [value, onChange] = useState([new Date(), new Date()]);
  // console.log('selected day',value[0], value[1])
  return (
    <div>
      <DateTimeRangePicker
        onChange={onChange}
        value={value}
      />
     
    </div>
  );
}

export default SelectHourDay ;