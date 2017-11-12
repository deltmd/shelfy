import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Router from './router'

import './reset.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      depth: 3
    }
    this.depthHandler = this.depthHandler.bind(this);
  }
  
  depthHandler(newDepth){
    console.log('depthHandler sayeth: ', newDepth);
    this.setState({
      depth: newDepth
    })
  }

  render() {
    return (
      <div>
        <Header depth={this.state.depth} shelf='Shelf A' bin='Bin 1'/>
        <Router depthHandler={this.depthHandler}/>
      </div>
    );
  }
}

export default App;
