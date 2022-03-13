import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    
  return (
    <div>
        <h3 className=''>예약 날짜와 시간선택</h3>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    </div>
  )
}

export default Calender