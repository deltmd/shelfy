import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import './../Header/Header.css'
import logo from '../../Images/logo.png'


export default class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      binId: [],
      shelfId: ''
    }
  }

  componentDidMount() {
    
    //this.props.setCurrentShelf(this.props.match.params.id)
    axios.get(`http://localhost:3000/api/shelf/${this.props.match.params.id}`).then(res => {
      console.log('res.data', res.data);
      console.log('this.props.match.params.id: ', this.props.match.params.id)
      this.setState({
        binId: res.data,
        shelfId: this.props.match.params.id

      })
    }
      // this data comes from the axios calls, make sure the properties match what is in the data table
    )
  }

  render() {
    return (
      <div>
        <header className='header_header-wrapper2'>
          <img src={logo} alt="" />
          <div className='header_shelf_sub-header-wrapper-2'>
            <p>Shelf {this.props.match.params.id}</p>
          </div>
        </header>
        
        <p>This is shelf {this.state.shelfId}</p>
        <p>It has this many bins: {this.state.binId.length}</p>
         
        {
        this.state.binId.map((e, i) => {
          console.log('map through objects');
          console.log('e.id: ', e.id)
          return(
          <Link key={i} to={`/bin/${this.state.shelfId}${e.id}`}>
            <h3>this is a bin: {i + e.productname}</h3>
          </Link>
          )
        })
      }</div>

    )
  }
}