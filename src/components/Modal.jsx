import React from 'react';
import { Redirect } from 'react-router-dom';

import './Modal.css';
import Title from './Title';
import Button from './Button';
import { TimerWrapper } from "./TimerWrapper";

class Modal extends React.Component {

  render() {
    if (this.props.timer) {
      return (
        <Redirect to={this.props.redirectTo} />
      )
    }
    return (
      <div className="modalContainer">
        <div className="contentContainer">
          <Title>{this.props.titleText}</Title>
          <img src={ this.props.imgSrc } alt="destruction earth" className="modalImage"/>
          <div className="textContainer">
            <p className="paragraph">{this.props.pText}</p>
          </div>
          <div className="btnContainer">
            <Button onClickButton={this.props.onClickButton} styles={{paddingTop: 12, paddingBottom: 12}} >{this.props.buttonText}</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default TimerWrapper(Modal, 5000);
