import React, { Component } from 'react';


import { 
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"


//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { fasDog, fasCat } from "@fortawesome/free-solid-svg-icons";

import DogContainer from './pages/dogs';

import CatContainer from './pages/cats';


//library.add(fasCat, fasDog)


export default class App extends Component {
  render() {
    return ( 
    
      <div className="app">
        

        
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dogs" component={DogContainer} />            
            <Route path="/cats" component={CatContainer} />

          </Switch>
        </Router>
        

        
        

        

      </div>
    
    
    

      
        
        

        
        
      
    );
  }
}
