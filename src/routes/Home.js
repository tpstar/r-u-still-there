import React from 'react';

import Modal from './Modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false
    }
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), 2000);
    console.log(this.timeoutId)
  };

  componentWillUnmount() {
    console.log('Home component will unmount')
    this.setState({ timer: false })
    clearTimeout(this.timeoutId)
  }

  closeModal() {
    this.setState({ timer: false });
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.setState({ timer: true }), 2000);
  }


  renderModal() {
    return <Modal onClose={() => this.closeModal()}/>
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        { this.state.timer && this.renderModal() }
      </div>
    );
  }

};

export default Home;
