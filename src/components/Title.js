import React from 'react';

// CSS
import 'css/Title.css';

function Title({month, ltOnclick, gtOnclick, todayOnclick}){
  return (
    <div className='title-wrapper'>
      <h1>2021년 {month}월</h1>
      <div className='btn-wrapper'>
        <button type='button' onClick={ltOnclick}>&lt;</button>
        <button type='button' onClick={todayOnclick}>오늘</button>
        <button type='button' onClick={gtOnclick}>&gt;</button>
      </div>
    </div>
  );
}

export default Title;