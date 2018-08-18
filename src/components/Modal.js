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
        <Redirect to={this.props.redirectTo} />
      )
    }
    return (
      <div className="modalContainer">
        <div className="contentContainer">
          <Title>{this.props.titleText}</Title>
          <img src={this.props.imgSrc} alt="destruction earth" className="modalImage"/>
          <div className="textContainer">
            <p className="paragraph">{this.props.pText}</p>
          </div>
          <div className="btnContainer">
            <Button onClickButton={this.props.onClickButton} styles={{paddingTop: 12, paddingBottom: 12}} >{this.props.buttonText}</Button>
          </div>
        </div>
              { !this.state.timeUp && <Timer timeUp={() => this.handleTimeUp()} timeDelay={5000}/>}
      </div>
    );
  }
};

export default Modal;
