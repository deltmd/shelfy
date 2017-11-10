import React from 'react';
import {Switch, Link} from 'react-router-dom'



export default function Company() {
    return (
      <div>
        <div>
          axios.get(api/url/shelfID)
        </div>
        <div>
          <Switch>
            <Link to= 'this will lead to specific bin'>axios.get(api/url//shelfID/binID)</Link>
            <Link to= 'this will lead to specific bin'>axios.get(api/url//shelfID/binID)</Link>
            <Link to= 'this will lead to specific bin'>axios.get(api/url//shelfID/binID)</Link>
            <Link to= 'this will lead to specific bin'>axios.get(api/url//shelfID/binID)</Link>
            <Link to= 'this will lead to specific bin'>axios.get(api/url//shelfID/binID)</Link>
          </Switch>
        </div>
        <button>Edit and Delete Buttons This will be DYNAMIC in size and function</button>
        <button>Edit and Delete Buttons This will be DYNAMIC in size and function</button>
        {/* how to set the right number of bins so that it is dynamic and can display all available bins? */}
      </div>
    )
  }