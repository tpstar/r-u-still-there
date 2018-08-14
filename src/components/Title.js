import React from 'react';

const Title = ({children}) => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  }
  const textStyle = {
    fontWeight: '700',
    display: 'inline-block',
    backgroundImage: 'linear-gradient(to right, #6573c3, #2c387e)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    letterSpacing: 2,
    paddingRight: 20,
    paddingLeft: 20,
  }
  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{children}</h1>
    </div>
  )
}

export default Title;
