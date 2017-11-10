import React, { Component } from 'react';
class Header extends Component {
  constructor() {
    super()
    this.state={
      depth: 1
    }
  }
  render(){
    return(
      <div>
        {this.state.depth}
      </div>
    )
  }
}
export default Header