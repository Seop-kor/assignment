import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSchedule } from 'modules/holydayModule';

// Component
import Calendar from 'components/Calendar';


const setCalendarData = (month, year, todayRef) => {
  let calJsx = [];

  const today = getFormatDateFull(new Date());

  const setDate = new Date(year, month - 1, 1);

  const firstDayName = setDate.getDay();

  // const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const lastDay = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate();

  // const prevLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  const prevLastDay = new Date(setDate.getFullYear(), setDate.getMonth(), 0).getDate();

  const prevyyyymm = getFormatDate(new Date(setDate.getFullYear(), setDate.getMonth() - 1, 1));
  const yyyymm = getFormatDate(setDate);
  const nextyyyymm = getFormatDate(new Date(setDate.getFullYear(), setDate.getMonth() + 1, 1));

  let startDayCount = 1;
  let lastDayCount = 1;

  for (let i = 0; i < 6; i++) {
    let calJsxInner = [];
    for (let j = 0; j < 7; j++) {

      if (i === 0 && j < firstDayName) {
        if (j === 0) {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${prevyyyymm}${prevLastDay - (firstDayName - 1) + j}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{(prevLastDay - (firstDayName - 1) + j)}</span>일</span></div></div>);
        } else if (j === 6) {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${prevyyyymm}${prevLastDay - (firstDayName - 1) + j}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{(prevLastDay - (firstDayName - 1) + j)}</span>일</span></div></div>);
        } else {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${prevyyyymm}${prevLastDay - (firstDayName - 1) + j}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{(prevLastDay - (firstDayName - 1) + j)}</span>일</span></div></div>);
        }
      }

      else if (i === 0 && j === firstDayName) {
        if (j === 0) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span>{startDayCount++}</span>일</span></div></div>);
          }
        } else if (j === 6) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span>{startDayCount++}</span>일</span></div></div>);
          }
        } else {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span>{(setDate.getMonth() + 1)+'월'}<span>{startDayCount++}</span>일</span></div></div>);
          }
        }
      }

      else if (i === 0 && j > firstDayName) {
        if (j === 0) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
        } else if (j === 6) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
        } else {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
        }
      }

      else if (i > 0 && startDayCount <= lastDay) {
        if (j === 0) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
          // calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
        } else if (j === 6) {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
        } else {
          if(yyyymm.toString() + setFixDayCount(startDayCount) === today){
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span ref={todayRef} className='today'>{startDayCount++}</span>일</span></div></div>);
          }else{
            calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${yyyymm}${setFixDayCount(startDayCount)}`}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{startDayCount++}</span>일</span></div></div>);
          }
        }
      }

      else if (startDayCount > lastDay) {
        if (j === 0) {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${nextyyyymm}${setFixDayCount(lastDayCount)}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{lastDayCount++}</span>일</span></div></div>);
        } else if (j === 6) {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${nextyyyymm}${setFixDayCount(lastDayCount)}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{lastDayCount++}</span>일</span></div></div>);
        } else {
          calJsxInner.push(<div className='calendar-holyday-wrapper' id={`${nextyyyymm}${setFixDayCount(lastDayCount)}`} style={{
            'color': 'rgba(0,0,0,0.4)'
          }}><div style={{'width' : '100%', 'height': 'fit-content', 'textAlign' : 'end'}}><span><span>{lastDayCount++}</span>일</span></div></div>);
        }
      }
    }
    calJsx.push(calJsxInner);
  }
  return calJsx;
};

const setFixDayCount = number => {
  let fixNum = "";
  if (number < 10) {
    fixNum = "0" + number;
  } else {
    fixNum = number;
  }
  return fixNum;
};

const getFormatDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth());
  month = month >= 10 ? month : '0' + month;
  return  year + '' + month;
};

const getFormatDateFull = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth());
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate();
  day = day >= 10 ? day : '0' + day;
  return  year + '' + month + '' + day;
};


function CalendarContainer({month, year, todayRef}){
  const calendarSet = setCalendarData(month, year, todayRef);
  const [dateFormat, setDateFormat] = useState('');
  const { holyday, schedule } = useSelector(state => ({
    holyday: state.holyday.holyday,
    schedule: state.holyday.schedule
  }));
  const dispatch = useDispatch();
  const filterHolyday = holyday.filter(item => {
    if(item.locdate.toString().includes(getFormatDate(new Date(year, month - 1, 1)))){
      return item;
    }
  });
  const filterSchedule = schedule.filter(item => {
    if(item.locdate.toString().includes(getFormatDate(new Date(year, month - 1, 1)))){
      return item;
    }
  });

  const openModal = (modalRef, e) => {
    modalRef.current.style.display = "flex";
    const target = e.target;
    if(target.tagName === "TD"){
      setDateFormat(target.children.item(0).id);
    }
    if(target.tagName === "DIV"){
      setDateFormat(target.id);
    }
  };
  
  const closeBtnOnclick = (modalRef) => {
    modalRef.current.style.display = "none";

  };
  
  const enrollOnclick = (dispatch, dateFormat, inputRef, modalRef) => {
    const scheduleName = inputRef.current.value;
    if(!scheduleName){
      alert("일정 내용을 입력해주세요.");
      return;
    }
    dispatch(setSchedule({
      locdate: dateFormat,
      dateName: scheduleName
    }));
    inputRef.current.value = null;
    modalRef.current.style.display = "none";
  };

  return (
    <Calendar calendarSet={calendarSet} filterHolyday={filterHolyday} openModal={openModal} closeModal={closeBtnOnclick} enrollOnclick={enrollOnclick} dispatch={dispatch} filterSchedule={filterSchedule} dateFormat={dateFormat} />
  );
}

export default React.memo(CalendarContainer);