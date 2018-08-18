import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), this.props.timeDelay);
  };

  componentWillUnmount() {
    this.setState({ timer: false })
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.timer) {
      this.props.timeUp();
    }
    return null;
  }
}

export default Timer;
