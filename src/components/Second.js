import React from 'react';
import { Link } from 'react-router-dom';

import Title from './Title';
import './Second.css';
import './Button.css';

const Second = () => {
  return (
    <div className="qrContainer">
      <Title>Quantum Realm</Title>
      <img src={require('../img/quantum-realm2.png')} alt="quantum realm 2" className="qrImage"/>
      <article>
        <p className="paragraph">The quantum realm, also called the quantum scale, is a term of art in physics referring to scales where quantum mechanical effects become important when studied as an isolated system. Typically, this means distances of 100 nanometers (10−9 meters) or less or at very low temperature. More precisely, it is where the action or angular momentum is quantized.</p>
        <p>While originating on the nanometer scale, such effects can operate on a macro level generating some paradoxes like in the Schrödinger's cat thought experiment. Two classical examples are electron tunneling and the double-slit experiment. Most fundamental processes in molecular electronics, organic electronics and organic semiconductors also originate in the quantum realm.</p>
        <p>The quantum realm can also sometimes involve actions at long distances.</p>
      </article>
      <div className="btnContainer">
        <Link className="btn" to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default Second;
