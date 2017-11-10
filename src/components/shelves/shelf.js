import React from 'react';
import {Switch, Link} from 'react-router-dom'



export default class extends Shelf extends component {
  constructor (){
    super ()
    this.state = {
      binId: [],
    }
  }

  componentDidMount() {
    axios.get( 'api.url/shelfId').then(
      this.setState({
        binId: binId

      })
      // this data comes from the axios calls, make sure the properties match what is in the data table
  )}

  render (){
    const binId = this.state.binId.map((e, i) => {
    return (
      <div>
        <div>
            <Link to= { `./shelf/${e.binId}` }>
              <h3>{e.binId}</h3>
            </Link>
        </div>
        <button>Edit and Delete Buttons This will be DYNAMIC in size and function</button>
        <button>Edit and Delete Buttons This will be DYNAMIC in size and function</button>
        {/* how to set the right number of bins so that it is dynamic and can display all available bins? */}
      </div>
    )
  }
}