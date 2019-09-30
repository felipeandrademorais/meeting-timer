import React, { Component } from "react";
import Counter from "../../component/Timer";
import Header from "../../component/Header";

export default class Timer extends Component {
  state = {
    participants: 0,
    salary: 0,
    minuteCost: 0,
    timeMeeting: 0,
    openTime: false,
    openInput: true
  };

  handleUpdate = (stateName, e) => {
    this.setState({ stateName: e.target.value });
  };

  handleClick = () => {
    const custo = this.state.salary / 12000;
    this.setState({ minuteCost: custo.toFixed(2) });
    this.setState({ openTime: true, openInput: false });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <div>
          {this.state.openInput ? (
            <div>
              <input
                type="text"
                onChange={e => this.setState({ participants: e.target.value })}
                placeholder="Quantos Participantes?"
              />
              <input
                type="text"
                onChange={e => this.setState({ salary: e.target.value })}
                placeholder="Qual o salário Total dos participantes?"
              />
              <input
                type="time"
                className="input-time"
                onChange={e => this.setState({ timeMeeting: e.target.value })}
                placeholder="Qual o tempo da reunião?"
              />
              <button onClick={this.handleClick}>Começar</button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          {this.state.openTime ? (
            <Counter
              cost={this.state.minuteCost}
              timeMeeting={this.state.timeMeeting}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
