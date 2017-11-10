import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Shelf from './shelf.js';




export default function Container() {
    return (
      <div>
        <Route name = 'A' path = '/shelf/:id' component = {Shelf} />
        <Link params = {{letter:'A'}} to='/shelf/A ' className = 'container_container-shelf' >Shelf A</Link>
        <Route name= 'B' path = '/shelfFrame/:id' component = {Shelf} />
        <Link params = {{letter:'B'}} to='/B' className = 'container_container-shelf'>Shelf B</Link>
        <Route name='C' path = '/shelfFrame/:id' component = {Shelf} />
        <Link params = {{letter:'C'}} to='/C' className = 'container_container-shelf'  >Shelf C</Link>
        <Route name='D' path = '/shelfFrame/:id' component = {Shelf} />
        <Link params = {{letter:'D'}} to='/D' className = 'container_container-shelf'>Shelf D</Link>
      </div>
    )
  }


//   all of these links are static and do not rely on specific ids, just files paths