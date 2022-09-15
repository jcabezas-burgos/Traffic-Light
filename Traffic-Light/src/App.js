import React, { useState } from 'react';
import './App.css';

function App() {
  const [light, setLight] = useState({
    lightRed: "red figure",
    lightYellow: "yellow figure",
    lightGreen: "green figure"
  })

  function Red() {
    setLight({
      lightRed: "lightRed figure",
      lightYellow: "yellow figure",
      lightGreen: "green figure"
    })
  }

  function Yellow() {
    setLight({
      lightRed: "red figure",
      lightYellow: "lightYellow figure",
      lightGreen: "green figure"
    })
  }

  function Green() {
    setLight({
      lightRed: "red figure",
      lightYellow: "yellow figure",
      lightGreen: "lightGreen figure"
    })
  }



  return (
    <div className="content">
      <div className="trafficLight">
        <div className={light.lightRed} onClick={Red}></div>
        <div className={light.lightYellow} onClick={Yellow}></div>
        <div className={light.lightGreen} onClick={Green}></div>
      </div>
    </div>
  );
}


export default App;

