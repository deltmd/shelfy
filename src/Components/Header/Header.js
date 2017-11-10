import React, { Component } from 'react';
class Header extends Component {
  constructor() {
    super()
    this.state={
      test: 'test'
    }
  }
  render(){
    return(
      <div>
        {this.state.test}
      </div>
    )
  }
}
export default Header