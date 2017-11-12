import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../Header/Header.css'
import logo from '../../Images/logo.png'
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
      <div>
        <header name='Shelfy' className='header_header-wrapper3'>
          <img src={logo} alt=""/>
          <p>SHELFIE</p>
        </header>
      <div className='Container_shelves-wrapper'>
        <Link  to='/shelf/A' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf A</button>
        </Link>
        <Link  to='/shelf/B' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf B</button>
        </Link>
        <Link to='/shelf/C' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf C</button>
        </Link>
        <Link to='/shelf/D' className='container_container-shelf'>
          <button onClick={() => this.props.depthHandler(2)}>Shelf D</button>
        </Link>
      </div>
      </div>
    )
  }
}


//   all of these links are static and do not rely on specific ids, just files paths