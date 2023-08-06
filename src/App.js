import './App.css';
import Timer from "./components/Timer";

import { useState } from 'react';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState([]);

  function setTimer() {
    setTime([hours, minutes, seconds]);
  }

  function resetTimer() {
    setTime([0, 0, 0]);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Timer</p>
      </header>
      <div className='timerTime'>
        <label for="hour">Hours</label>
        <input id='hour' type="number" name="hours" className='hours' min={0} max={24} value={hours} onChange={(event) => setHours(event.target.value)} />
        <label for="minute">Minutes</label>
        <input id='minute' type="number" name="minutes" className="minutes" min={0} max={60} value={minutes} onChange={(event) => setMinutes(event.target.value)} />
        <label for="second">Seconds</label>
        <input id='second' type="number" name="seconds" className="seconds" min={0} max={60} value={seconds} onChange={(event) => setSeconds(event.target.value)} />
      </div>
      <div className='timerButton'>
        <button type="setTime" onClick={setTimer}>Set time</button>
        <button type="reset" onClick={resetTimer}>Reset time</button>
      </div>
      <Timer time={time} />
    </div>
  );
}

export default App;
