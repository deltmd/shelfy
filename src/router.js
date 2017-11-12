import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

import Shelf from './Components/shelves/shelf.js';
import Container from './Components/shelves/container'
import Bin from './Components/bins/binFrame.js'


export default class Router extends Component {
  render(){
    return(
      <div>
      
      <Switch>
        <Route name='Container' exact path='/' render={() => (
          <Container depthHandler={this.props.depthHandler}/>
        )} />
        <Route path='/shelf/:id' component={Shelf}/>
        <Route path='/bin/:id' component={Bin} />
      </Switch>
        </div>
    )
  }
}