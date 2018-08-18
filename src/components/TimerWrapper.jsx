import React from 'react';

export const TimerWrapper = (ComposedComponent, milliSec) => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    }
    this.resetTimer = this.resetTimer.bind(this);
  }

  resetTimer() {
    this.setState({ timer: false });
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), milliSec);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), milliSec);
  };

  componentWillUnmount() {
    this.setState({ timer: false })
    clearTimeout(this.timeoutId);
  }

  render() {
    return <ComposedComponent resetTimer={() => this.resetTimer()} {...this.props} {...this.state} />
  }
}
