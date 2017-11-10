import React from 'react';
import {Switch, Link} from 'react-router-dom'



export default function Company() {
    return (
      <div>
        <Link>Shelf A Will go Here --> Can link to single shelf component that takes in a url parameter</Link>
        <Link>Shelf B Will go Here --> May make each shelf its own component with</Link>
        <Link>Shelf C Will go here</Link>
        <Link>Shelf D Will go here</Link>
      </div>
    )
  }


//   all of these links are static and do not rely on specific ids, just files paths