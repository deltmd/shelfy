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
    axios.get(`/api/shelf/${this.props.match.params.id}`).then(res =>{
      console.log(res.data);
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
        <Link key={i} to={`./shelf/${binId}`}>
          <h3>{e.productname}</h3>
        </Link>
      )
    })
    return (
      <div>
       {binId}
      </div>
      
    )
  }
}