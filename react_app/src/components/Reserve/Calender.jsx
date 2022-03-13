import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {hairDesign} from './Modal.jsx'

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h3 className=''>예약 날짜와 시간선택</h3>
      <DatePicker
        selected={startDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="yyyy, MMMM d h:mm aa"
        value={startDate}
        onChange={(date) => {
          const d = new Date(date);
          setStartDate(d);
          
        }}
        />
      
      <h3>예약 내역</h3>
      <div>{startDate.toLocaleString()}</div>



    </div>
  )

}

export default Calender