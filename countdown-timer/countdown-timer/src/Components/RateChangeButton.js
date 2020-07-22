import React from 'react';

function RateChangeButton(props){
  return (
    <div className={props.active + ' box'} onClick={() => props.handleRateChange(props.rate)}><p>{props.message}</p></div>
  )
}

export default RateChangeButton;