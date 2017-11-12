import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Router from './router'

import './reset.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      depth: 3,
      currentShelf: ''
    }
    this.depthHandler = this.depthHandler.bind(this);
    this.setCurrentShelf = this.setCurrentShelf.bind(this);
  }
  setCurrentShelf(x){
    this.setState({
      currentShelf: x
    })
  }
  depthHandler(newDepth){
    
    this.setState({
      depth: newDepth
    })
  }

  render() {
    return (
      <div>
        
        <Router depthHandler={this.depthHandler} setCurrentShelf={this.setCurrentShelf}/>
        
      </div>
    );
  }
}

export default App;
