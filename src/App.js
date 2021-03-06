import React, { Component } from 'react';
import Clock from './components/Clock';
import DarkMode from './components/DarkMode';
import CurrentTime from './components/CurrentTime';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  state = {
    secondsTimer: 0,
    minutesTimer: 0,
    hoursTimer: 0,
  };

  // Loads everytime page is rendered
  // Will run the setClock function every second so its loads in real time
  componentDidMount() {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  setClock = () => {
    const currentDate = new Date();
    // Seconds Ratio current time divided by 60
    let secondsTimer = currentDate.getSeconds() / 60;
    // Minutes Ratio current time divided by 60
    let minutesTimer = (secondsTimer + currentDate.getMinutes()) / 60;
    // Hour Ratio current time divided by 12
    let hoursTimer = (minutesTimer + currentDate.getHours()) / 12;

    this.setState({ secondsTimer: secondsTimer });
    this.setState({ minutesTimer: minutesTimer });
    this.setState({ hoursTimer: hoursTimer });
  };

  render() {
    // Set seconds minutes and hours into state
    const { secondsTimer, minutesTimer, hoursTimer } = this.state;
    // Pass in props seconds, minutes and hours
    return (
      <>
        <div>
          <DarkMode />
          <Clock
            secondsTimer={secondsTimer}
            minutesTimer={minutesTimer}
            hoursTimer={hoursTimer}
          />
          {/* <CurrentTime /> */}
        </div>
      </>
    );
  }
}

export default App;
