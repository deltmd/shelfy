import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import Shelf from './components/shelves/shelf.js';
import Container from './components/shelves/container'


export default class Router extends Component {
  render(){
    return(
      <Switch>
        <Route name='Container' exact path='/' render={() => (
          <Container depthHandler={this.props.depthHandler}/>
        )} />
        <Route name='A' path='/shelf/:id' component={Shelf} />
      </Switch>
    )
  }
}