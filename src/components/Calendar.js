import React, { useEffect, useRef, useState } from 'react';

// CSS
import 'css/Calendar.css';

function Calendar({calendarSet, filterHolyday, filterSchedule, openModal, closeModal, enrollOnclick, dispatch}){
  useEffect(() => {
    if(calendarSet.length > 0){
      filterHolyday.forEach(item => {
        const a = document.getElementById(item.locdate);
        a.innerHTML += `
          <div class='holyday'>
            <span>${item.dateName}</span>
          </div>
        `;
      });
      filterSchedule.forEach(item => {
        const a = document.getElementById(item.locdate);
        a.innerHTML += `
          <div class='enrollday'>
            <span>${item.dateName}</span>
          </div>
        `;
      });
    }
  }, [filterHolyday, filterSchedule]);
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const [dateFormat, setDateFormat] = useState('');
  return (
    <>
    <table className='calendar-wrapper'>
      <thead>
        <tr>
          <td><span>일</span></td>
          <td><span>월</span></td>
          <td><span>화</span></td>
          <td><span>수</span></td>
          <td><span>목</span></td>
          <td><span>금</span></td>
          <td><span>토</span></td>
        </tr>
      </thead>
      <tbody>
        {calendarSet.map((item, index) => {
          return (<tr key={index}>
          {item.map(i => {
            return <td key={Math.random() + i} onClick={(e) => {openModal(modalRef, setDateFormat, e)}}>{i}</td>;
          })}
          </tr>);
        })}
      </tbody>
    </table>

    <div className='modal-wrapper' ref={modalRef}>
      <div className='modal'>
        <p className='modal-top-close'><span className='modal-top-close-btn' onClick={() => {closeModal(modalRef)}}>X</span></p>
        <div className='modal-title'>일정 등록</div>
        <div className='modal-content'>
          <input type='text' ref={inputRef} />
        </div>
        <div className='modal-close'>
          <button type='button' className='modal-suc-btn' onClick={() => {enrollOnclick(dispatch, dateFormat, inputRef, modalRef)}}>등록</button>
          <button type='button' className='modal-close-btn' onClick={() => {closeModal(modalRef)}}>닫기</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default React.memo(Calendar);