import React from 'react';
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false
    }
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), 2500);
  };

  componentWillUnmount() {
    console.log('Modal component will unmount')
    this.setState({ timer: false })
    clearTimeout(this.timeoutId)
  }

  render() {
    if (this.state.timer) {
      return (
        <Redirect to={{
          pathname: '/sec',
        }}/>
      )
    }
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>Modal</h1>
          <div
            style={{
              width: "100%",
              height: 400,
              background: 'LimeGreen'
            }}
          />
          <button onClick={() => this.props.onClose()}>Close</button>
        </div>
      </div>
    );
  }
};

export default Modal;
