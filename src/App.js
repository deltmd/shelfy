import React, { Component } from 'react';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      depth: 1
    }
  }
  
  depthHandler(newDepth){
    this.setState({
      depth: newDepth
    })
  }

  render() {
    return (
      <div>
        <Header depth={this.state.depth}/>
      </div>
    );
  }
}

export default App;
