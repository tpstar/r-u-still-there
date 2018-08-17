import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    }
  }

  componentDidMount() {
    console.log('Timer did mount')
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), this.props.timeDelay);
  };

  componentWillUnmount() {
    this.setState({ timer: false })
    clearTimeout(this.timeoutId);
    console.log('clearTimeout')
  }

  render() {
    if (this.state.timer) {
      this.props.timeUp();
    }
    return null;
  }
}

export default Timer;
