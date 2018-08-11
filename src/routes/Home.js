import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStillThere: true
    }
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => this.setState({ isStillThere: false }), 10000);
  };

  componentWillUnmount() {
    this.setState({ isStillThere: true })
    clearTimeout(this.timeoutId)
  }

  render() {
    console.log(this.state.isStillThere);
    if (!this.state.isStillThere) {
      return <Redirect to="/sec" />
    }
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }

};

export default Home;
