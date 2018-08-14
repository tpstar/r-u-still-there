import React from 'react';

import Modal from './Modal';
import Title from './Title';
import './Home.css';

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
    return <Modal onClickButton={() => this.closeModal()}/>
  }

  render() {
    return (
      <div className="home_container">
        <Title>Quantum Mechanics of Time Travel</Title>
        <article>
          <p className="paragraph">Until recently, most studies on time travel are based upon classical general relativity. Coming up with a quantum version of time travel requires us to figure out the time evolution equations for density states in the presence of closed timelike curves (CTC).</p>
          <p>Novikov had conjectured that once quantum mechanics is taken into account, self-consistent solutions always exist for all time machine configurations, and initial conditions. However, it has been noted such solutions are not unique in general, in violation of determinism, unitarity and linearity.</p>
          <p>The application of self-consistency to quantum mechanical time machines has taken two main routes. Novikov's rule applied to the density matrix itself gives the Deutsch prescription. Applied instead to the state vector, the same rule gives nonunitary physics with a dual description in terms of post-selection.</p>
          <p>In 1991, David Deutsch came up with a proposal for the time evolution equations, with special note as to how it resolves the grandfather paradox and nondeterminism. However, his resolution to the grandfather paradox is considered unsatisfactory to some people, because it states the time traveller reenters another parallel universe, and that the actual quantum state is a quantum superposition of states where the time traveller does and does not exist.</p>
          <p>He made the simplifying assumption that we can split the quantum system into a subsystem A external to the closed timelike curve, and a CTC part. Also, he assumed that we can combine all the time evolution between the exterior and the CTC into a single unitary operator U. This presupposes the Schrödinger picture. We have a tensor product for the combined state of both systems. He makes the further assumption there is no correlation between the initial density state of A and the density state of the CTC. This assumption is not time-symmetric, which he tried to justify by appealing to measurement theory and the second law of thermodynamics. He proposed that the density state restricted to the CTC is a fixed-point of</p>
          <img src={require('../img/eq1.svg')} alt="eq 1"/>
          <p>He showed that such fixed points always exist. He justified this choice by noting the expectation value of any CTC observable will match after a loop. However, this could lead to "multivalued" histories if memory is preserved around the loop. In particular, his prescription is incompatible with path integrals unless we allow for multivalued fields. Another point to note is in general, we have more than one fixed point, and this leads to nondeterminism in the time evolution. He suggested the solution to use is the one with the maximum entropy. The final external state is given by</p>
          <img src={require('../img/eq2.svg')} alt="eq 2"/>
          <p>Pure states can evolve into mixed states.</p>
          <p>This leads to seemingly paradoxical resolutions to the grandfather paradox. Assume the external subsystem is irrelevant, and only a qubit travels in the CTC. </p>
          <p>Later researchers have noted that if his prescription turned out to be right, computers in the vicinity of a time machine can solve PSPACE-complete problems.</p>
        </article>
        { this.state.timer && this.renderModal() }
      </div>

    );
  }

};

export default Home;
