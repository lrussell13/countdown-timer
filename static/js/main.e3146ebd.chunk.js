(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/video-pause-button.132a900c.svg"},function(e,t,a){e.exports=a.p+"static/media/video.517477dc.svg"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),r=a.n(c),i=(a(14),a(3)),u=a(4),l=a(8),o=a(7);a(15);var d=function(e){return s.a.createElement("div",{className:e.active+" box",onClick:function(){return e.handleRateChange(e.rate)}},s.a.createElement("p",null,e.message))};var m=function(e){return s.a.createElement("div",{className:"box-flex-row"},s.a.createElement(d,{active:1e3===e.currentSelected?"active":"",handleRateChange:e.handleRateChange,rate:1e3,message:"1x"}),s.a.createElement(d,{active:750===e.currentSelected?"active":"",handleRateChange:e.handleRateChange,rate:750,message:"1.5x"}),s.a.createElement(d,{active:500===e.currentSelected?"active":"",handleRateChange:e.handleRateChange,rate:500,message:"2x"}))};function h(e,t,a){if(a){if(0===e&&t<10)return"red blink";if(0===e&&t<20)return"red"}}var f=function(e){return s.a.createElement("h1",{className:h(e.minutes,e.seconds,e.touched)},e.minutes<10?"0".concat(e.minutes):e.minutes," : ",e.seconds<10?"0".concat(e.seconds):e.seconds)};var p=function(e){return s.a.createElement("p",{className:"display-message"},e.message)},v=a(5),g=a.n(v),E=a(6),C=a.n(E),S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={minutes:0,seconds:0,rate:1e3,paused:!1,minuteHalf:0,secondHalf:0,touched:!1,initTime:0},e.handleMinutesChange=function(t){if(!e.state.touched){var a=parseInt(t.target.value);(!a||a<0)&&(a=0),e.setState({minutes:a})}},e.handleStart=function(){if(!e.state.touched){var t=e.state.minutes;e.setState({initTime:t}),e.calculateHalf(),e.setState({touched:!0}),e.loop()}},e.handleRateChange=function(t){e.setState({rate:t})},e.handlePause=function(){if(e.state.touched){var t=!e.state.paused;e.setState({paused:t},(function(){e.loop()}))}},e.loop=function(){e.state.paused||setTimeout((function(){var t=e.state.seconds,a=e.state.minutes;t>0?(t--,e.setState({seconds:t}),e.loop()):a>0&&t<=0?(t=59,a--,e.setState({seconds:t,minutes:a}),e.loop()):setTimeout((function(){var t=e.state.initTime;e.setState({minutes:t}),e.setState({touched:!1})}),2e3)}),e.state.rate)},e.calculateHalf=function(){var t=60*e.state.minutes/2,a=t/60,n=t%60;a<1&&(a=0),e.setState({minuteHalf:a,secondHalf:n})},e.displayMessage=function(){if(e.state.touched){if(0===e.state.minutes&&0===e.state.seconds)return"Time\u2019s up!";if(e.state.minuteHalf>e.state.minutes||e.state.minuteHalf===e.state.minutes&&e.state.secondHalf>=e.state.seconds)return"More than halfway there!"}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.seconds,n=t.minutes,c=t.paused,r=t.rate,i=t.touched;return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"flex-row"},s.a.createElement("strong",null,"Countdown:"),s.a.createElement("input",{type:"number",placeholder:"(Min)",onChange:function(t){return e.handleMinutesChange(t)}}),s.a.createElement("button",{className:"start-btn",onClick:function(){return e.handleStart()}},"Start")),this.displayMessage()?s.a.createElement(p,{message:this.displayMessage()}):"",s.a.createElement("div",{className:"flex-row relative"},s.a.createElement(f,{seconds:a,minutes:n,touched:i}),c?s.a.createElement("img",{className:"play-pause",src:C.a,alt:"",onClick:function(){return e.handlePause()}}):s.a.createElement("img",{src:g.a,alt:"",className:"play-pause",onClick:function(){return e.handlePause()}})),s.a.createElement(m,{handleRateChange:this.handleRateChange,currentSelected:r}))}}]),a}(s.a.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e3146ebd.chunk.js.map