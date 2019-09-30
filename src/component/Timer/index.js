import React, { Component } from "react";
import Timer from "react-compound-timer";

export default class Counter extends Component {
  state = {
    minuteCost: this.props.cost
  };

  handleVerifyTime(time) {
    let second = time / 1000;
    let meetingTime = this.props.timeMeeting.split(":");
    let seconds = parseInt(meetingTime[0]) * 60 + parseInt(meetingTime[1]);

    console.log(second);
    console.log(seconds);

    if (second > seconds) {
      return true;
    }
    return false;
  }

  handleCost(time) {
    let second = time / 1000;
    let minute = second.toFixed(0) / 60;
    let currentCost = minute * this.state.minuteCost;
    return `R$ ${currentCost.toFixed(2)}`;
  }

  render() {
    return (
      <Timer>
        {({ start, stop, reset, getTime }) => (
          <React.Fragment>
            <div className="container">
              <div className="container-time">
                <div className="timer-container">
                  <Timer.Hours
                    formatValue={value =>
                      `${value < 10 ? `0${value}` : value}:`
                    }
                  />
                  <Timer.Minutes
                    formatValue={value =>
                      `${value < 10 ? `0${value}` : value}:`
                    }
                  />
                  <Timer.Seconds
                    formatValue={value => `${value < 10 ? `0${value}` : value}`}
                  />
                </div>
                <br />
                <div>
                  <button className="start" onClick={start}>
                    Start
                  </button>
                  <button className="stop" onClick={stop}>
                    Stop
                  </button>
                  <button className="reset" onClick={reset}>
                    Reset
                  </button>
                </div>
              </div>
              <div className="lateral">
                <h1>Custo por minuto</h1>
                <h3>{`R$ ` + this.props.cost}</h3>
                <h1>Gasto até o momento</h1>
                <h3>{this.handleCost(getTime())}</h3>
              </div>
            </div>
            <h1 className="exceed-time">
              {this.handleVerifyTime(getTime()) ? "Tempo Excedido!" : ""}
            </h1>
          </React.Fragment>
        )}
      </Timer>
    );
  }
}
