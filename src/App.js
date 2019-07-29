import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import SingleCategory from './components/service/singlecategory/SingleCategory';
import AllService from './components/service/allservice/AllService';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/thema/:id' component={SingleCategory} />
              <Route path='/thema' component={AllService} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
