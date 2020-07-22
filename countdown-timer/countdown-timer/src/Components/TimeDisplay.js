import React from 'react';

function buildClass(m, s, t){
  if(t){
    if(m === 0 && s < 10){
      return "red blink";
    } else if(m === 0 && s < 20){
      return "red";
    }
  }
}

function TimeDisplay(props){
  return (
    <h1 className={buildClass(props.minutes, props.seconds, props.touched)}>{ props.minutes < 10 ? `0${props.minutes}`: props.minutes } : { props.seconds < 10 ? `0${props.seconds}`: props.seconds }</h1> 
  )
}

export default TimeDisplay;