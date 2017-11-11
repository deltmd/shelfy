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
        <Route name='A' path='/shelf/A' component={Shelf} />
        <Route name='B' path='/shelf/B' component={Shelf} />
        <Route name='C' path='/shelf/C' component={Shelf} />
        <Route name='D' path='/shelf/D' component={Shelf} />
      </Switch>
    )
  }
}