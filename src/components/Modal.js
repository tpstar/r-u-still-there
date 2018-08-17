import React from 'react';
import { Redirect } from 'react-router-dom';

import './Modal.css';
import Title from './Title';
import Button from './Button';
import Timer from './Timer';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeUp: false,
    }
  };

  handleTimeUp() {
    this.setState({timeUp: true})
  }

  render() {
    if (this.state.timeUp) {
      return (
        <Redirect to='/sec'/>
      )
    }
    return (
      <div className="modalContainer">
        <div className="contentContainer">
          <Title>Are you still there?</Title>
          <img src={require('../img/destruction-earth.jpg')} alt="destruction earth" className="modalImage"/>
          <div className="textContainer">
            <p className="paragraph">Half of humanity was wiped out by Thanos’ fatal finger snap. And the only way to bring back dead Avengers is to time travel through Quantum Realm.</p>
          </div>
          <div className="btnContainer">
            <Button onClickButton={this.props.onClickButton} styles={{paddingTop: 12, paddingBottom: 12}} >I’m still here</Button>
          </div>
        </div>
              { !this.state.timeUp && <Timer timeUp={() => this.handleTimeUp()} timeDelay={5000}/>}
      </div>
    );
  }
};

export default Modal;
