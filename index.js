import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      date: new Date(),
    }
  }
componentDidMount()
{
  this.interval = setInterval( () => this.tick(),100);
}
tick()
{
  this.setState({date:new Date()})
}
  render() {
    return (
      <div>
        <p className="date1"> time is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
