import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'



export default class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      binId: [],
    }
  }

  componentDidMount() {
    axios.get(`/api/shelf/${this.props.letter}`).then(res =>{
      this.setState({
        binId: res.data
        
      })
    }
      // this data comes from the axios calls, make sure the properties match what is in the data table
    )
  }

  render() {
    const binId = this.state.binId.map((e, i) => {
      return (
        <div>
          <Link key={i} to={`./shelf/${binId}`}>
            <h3>{binId}</h3>
          </Link>
        </div>
      )
    })
    return (
      <div>
       {binId}
      </div>
      
    )
  }
}