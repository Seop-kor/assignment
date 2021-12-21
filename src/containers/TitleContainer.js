import React from 'react';
import Title from 'components/Title';

const statePromise = (setMonth, n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
    setMonth(n);
  });
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
    statePromise(setMonth, today.getMonth() + 1).then(n => {
      if(n){
        // todayRef.current.classList.add("today-animation");
        todayRef.current.animate([
          {
            transform: 'scale(1)'
          },
          {
            transform: 'scale(1.1)'
          },
          {
            transform: 'scale(1)'
          }
        ], {
          duration: 300
        });
      }
    });
  };
  return (
    <Title month={month} ltOnclick={ltOnclick} gtOnclick={gtOnclick} todayOnclick={todayOnclick} />
  );
}

export default React.memo(TitleContainer);