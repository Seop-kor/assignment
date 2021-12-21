import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setHolydayData } from 'modules/holydayModule';

// CSS
import 'css/App.css';

// Component
import TitleContainer from 'containers/TitleContainer';
import CalendarContainer from 'containers/CalendarContainer';


const setHolyday = (dispatch) => {
  axios.get('https://apiseop.site/holyday').then((res) => {
    dispatch(setHolydayData(res.data.response.body.items.item));
  }).catch(err => {
    console.log(err);
  });
};

function App() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const dispatch = useDispatch();
  const todayRef = useRef(null);
  setHolyday(dispatch);
  return (
    <div className='wrapper'>
      <TitleContainer month={month} setMonth={setMonth} todayRef={todayRef} />
      <CalendarContainer month={month} year={2021} todayRef={todayRef} />
    </div>
  );
}

export default React.memo(App);
