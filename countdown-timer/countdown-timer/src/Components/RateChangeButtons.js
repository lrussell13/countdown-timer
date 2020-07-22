import React from 'react';
import RateChangeButton from './RateChangeButton';

function Buttons(props){
  return (
    <div className="box-flex-row">
      <RateChangeButton active={props.currentSelected === 1000 ? 'active' : ''} handleRateChange={props.handleRateChange} rate={1000} message="1x"/>
      <RateChangeButton active={props.currentSelected === 750 ? 'active' : ''}  handleRateChange={props.handleRateChange} rate={750} message="1.5x"/>
      <RateChangeButton active={props.currentSelected === 500 ? 'active' : ''}  handleRateChange={props.handleRateChange} rate={500} message="2x"/>
    </div>
  );
}

export default Buttons;