import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'



export default class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      binId: [],
      shelfId: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
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
        
        <p>This is shelf {this.state.shelfId}</p>
        <p>It has this many bins: {this.state.binId.length}</p>
        <p>bins: {{...this.state.binId}}</p>  
        {
        this.state.binId.map((e, i) => {
          <Link key={i} to={`/shelf/${this.state.shelfId}${e.id}`}>
            <h3>this is a bin: {i + e.productname}</h3>
          </Link>
        })
      }</div>

    )
  }
}