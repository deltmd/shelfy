import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Shelf from './shelf.js';

import './container.css'

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='Container_shelves-wrapper'>
        <Link params={{ letter: 'A' }} to='/shelf/A' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf A</button>
        </Link>
        <Link params={{ letter: 'B' }} to='/shelf/B' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf B</button>
        </Link>
        <Link params={{ letter: 'C' }} to='/shelf/C' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf C</button>
        </Link>
        <Link params={{ letter: 'D' }} to='/shelf/D' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf D</button>
        </Link>
      </div>
    )
  }
}


//   all of these links are static and do not rely on specific ids, just files paths