import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: props.time[0],
      minutes: props.time[1],
      seconds: props.time[2],
      isPaused: true, // По замовчуванню, таймер знаходиться у режимі паузи
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.time !== this.props.time) {
      this.setState({
        hours: this.props.time[0],
        minutes: this.props.time[1],
        seconds: this.props.time[2],
      });
    }
  }

  startTimer() {
    if (this.state.isPaused) {
      this.timerInterval = setInterval(() => {
        if (this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0) {
          clearInterval(this.timerInterval);
        } else {
          if (this.state.seconds > 0) {
            this.setState((prevState) => ({
              seconds: prevState.seconds - 1,
            }));
          } else if (this.state.minutes > 0) {
            this.setState((prevState) => ({
              minutes: prevState.minutes - 1,
              seconds: 59,
            }));
          } else if (this.state.hours > 0) {
            this.setState((prevState) => ({
              hours: prevState.hours - 1,
              minutes: 59,
              seconds: 59,
            }));
          }
        }
      }, 1000);

      this.setState({ isPaused: false });
    }
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.setState({ isPaused: true });
  }

  render() {
    return (
      <div>
        <p className="allTime">
          <span>{this.state.hours || 0}</span>:<span>{this.state.minutes || 0}</span>:<span>{this.state.seconds || 0}</span>
        </p>
        <div className="manageTimerButton">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Timer;
