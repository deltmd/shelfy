import React, { Component } from 'react';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      depth: 3
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
        <Header depth={this.state.depth} shelf='Shelf A' bin='Bin 1'/>
      </div>
    );
  }
}

export default App;
