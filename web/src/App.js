import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'; 
import List from './List'; 
import Read from './Read'; 
import Write from './Write'; 
class App extends Component {
   render() { 
     return ( 
     <div> 
       {/* <div className="lnk"> 
       <ul> 
         <li> 
           <Link to="/">List</Link> 
         </li> 
         <li> 
           <Link to="/read">Read</Link> 
         </li> 
         <li> 
            <Link to="/write">Write</Link> 
          </li> 
        </ul> 
        </div> */} 
        <div className="route"> 
        <Route exact path="/" component={List} /> 
        <Route path="/read/:id?" component={Read} /> 
        <Route path="/write" component={Write} /> 
        </div> 
        </div> 
        ); 
      } 
    } 
    
  export default App;

