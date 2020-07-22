import React from 'react';
import './App.css';
import RateChangeButtons from './Components/RateChangeButtons';
import TimeDisplay from './Components/TimeDisplay';
import DisplayMessage from './Components/DisplayMessage';
import Pause from './Content/video-pause-button.svg';
import Play from './Content/video.svg';

class App extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    rate: 1000,
    paused: false,
    minuteHalf: 0,
    secondHalf: 0,
    touched: false,
    initTime: 0
  }

  handleMinutesChange = e => {
    if(!this.state.touched){
      let minutes = parseInt(e.target.value);
      if(!minutes || minutes < 0){
        minutes = 0;
      }
      this.setState({ minutes });
    }
  }

  handleStart = () => {
    if(!this.state.touched){
      let initTime = this.state.minutes;
      this.setState({ initTime });
      this.calculateHalf();
      this.setState({touched: true});
      this.loop();  
    }
  }

  handleRateChange = newRate => {
    this.setState({rate: newRate});
  }

  handlePause = () => {
    if(this.state.touched){
      let paused = !this.state.paused;
      this.setState({ paused }, () => {
        this.loop();
      });
    }
  }

  loop = () => {
    if(!this.state.paused){
      setTimeout(() => { 
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        
        if(seconds > 0){
          seconds--;
          this.setState({ seconds }); 
          this.loop();
        } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
          this.setState({seconds, minutes});
          this.loop();
        } else {
          setTimeout(()=> {
            let initTime = this.state.initTime; 
            this.setState({ minutes: initTime });
            this.setState({touched: false});
          }, 2000)
        }
      }, this.state.rate);
    } 
  }

  calculateHalf = () => {
    let half = (this.state.minutes * 60)/ 2
    let minuteHalf = half / 60;
    let secondHalf = half % 60;
    if(minuteHalf < 1){
      minuteHalf = 0;
    }
    this.setState({ minuteHalf, secondHalf });
  }

  displayMessage = () => {
    if(this.state.touched){
      if(this.state.minutes === 0 && this.state.seconds === 0){
        return "Time’s up!";
      } else if (this.state.minuteHalf > this.state.minutes ||  (this.state.minuteHalf === this.state.minutes && this.state.secondHalf >= this.state.seconds)){
        return "More than halfway there!";
      }
    }
  }

  render(){
    const {seconds, minutes, paused, rate, touched} = this.state;
    return (
      <div className="app">
        <div className="flex-row">
          <strong>Countdown:</strong>
          <input type="number" placeholder="(Min)" onChange={e => this.handleMinutesChange(e)}/>
          <button className="start-btn" onClick={() => this.handleStart()}>Start</button>
        </div>
        {this.displayMessage() ? <DisplayMessage message={this.displayMessage()}/>: ''}
        <div className="flex-row relative">
          <TimeDisplay seconds={seconds} minutes={minutes} touched={touched} />
          {paused ? <img className="play-pause" src={Play} alt="" onClick={() => this.handlePause()}></img>: <img src={Pause} alt="" className="play-pause" onClick={() => this.handlePause()}></img>}
        </div>
        <RateChangeButtons handleRateChange={this.handleRateChange} currentSelected={rate}/>
      </div>
    );
  }
}

export default App;
