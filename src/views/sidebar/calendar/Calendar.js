import React from 'react';
import './Calendar.css'
import { Calendar } from 'antd';

const CalendarComponent = (props) => {

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className='calendar'>
      <h2 className='calendar-title'>Calendar</h2>
      <Calendar onPanelChange={onPanelChange} />;
    </div>
  )
}

export default CalendarComponent;