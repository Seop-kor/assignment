import React from 'react';
import Title from 'components/Title';

const getFormatDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth());
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate();
  day = day >= 10 ? day : '0' + day;
  return  year + '' + month + '' + day;
};

function TitleContainer({month, setMonth, todayRef}){
  const ltOnclick = () => {
    if(!(month - 1 < 1)){
      setMonth(month - 1);
    }
  }
  const gtOnclick = () => {
    if(!(month + 1 > 12)){
      setMonth(month + 1);
    }
  };
  const todayOnclick = () => {
    const today = new Date();
    setMonth(today.getMonth() + 1);
    const formatToday = getFormatDate(today);
    // console.log(document.getElementById(formatToday).children.item(0).children.item(0).children.item(0).className = "today");
    setTimeout(() => {
      todayRef.current.className = "today";
    }, 200);
  };
  return (
    <Title month={month} ltOnclick={ltOnclick} gtOnclick={gtOnclick} todayOnclick={todayOnclick} />
  );
}

export default TitleContainer;