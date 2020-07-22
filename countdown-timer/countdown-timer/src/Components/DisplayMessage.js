import React from 'react';

function DisplayMessage(props){
  return (
    <p className="display-message">{props.message}</p>
  )
}

export default DisplayMessage;