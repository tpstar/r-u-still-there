import React from 'react';
import { Redirect } from 'react-router-dom';

import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false
    }
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), 112000);
  };

  componentWillUnmount() {
    console.log('Modal component will unmount')
    this.setState({ timer: false })
    clearTimeout(this.timeoutId)
  }

  render() {
    console.log(this.state.timer)
    if (this.state.timer) {
      return (
        <Redirect to={{
          pathname: '/sec',
        }}/>
      )
    }
    return (
      <div className="modal_container">
        <div className="content">
          <h1>Modal</h1>
          <div className="colorBox" />
          <button onClick={() => this.props.onClose()} className="btn">I’m still here</button>
        </div>
      </div>
    );
  }
};

export default Modal;
