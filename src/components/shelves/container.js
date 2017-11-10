import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Shelf from './shelfFrame.js';




export default function Container() {
    return (
      <div>
        <Route path = '/shelfFrame/:id' component = {ShelfFrame} classname = 'container_container-shelf'>Shelf A</Route>
        <Route path = '/shelfFrame/:id' component = {ShelfFrame} classname = 'container_container-shelf'>Shelf B</Route>
        <Route path = '/shelfFrame/:id' component = {ShelfFrame} classname = 'container_container-shelf'>Shelf C</Route>
        <Route path = '/shelfFrame/:id' component = {ShelfFrame} classname = 'container_container-shelf'>Shelf D</Route>
      </div>
    )
  }


//   all of these links are static and do not rely on specific ids, just files paths