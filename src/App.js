import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ScrollTop from './hoc/ScrollTop';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProviderIntro from './components/provider/ProviderIntro';
import SingleCategory from './components/service/singlecategory/SingleCategory';
import AllService from './components/service/allservice/AllService';
import RegisterProvider from './components/provider/RegisterProvider';
import ServiceDetails from './components/service/servicedetails/ServiceDetails'
import 'materialize-css/dist/css/materialize.min.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Purchase from './components/consumer/Purchase'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <ScrollTop> {/* Route간 Link 연결 시 현재페이지의 스크롤을 그대로 가져가지 않고, Top으로 위치시키는 hoc */}
          <div className="App">
            <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/thema/:category' component={SingleCategory} />
                <Route exact path='/thema/:category/:id' component={ServiceDetails} />
                <Route path='/thema' component={AllService} />
                <Route path='/productIntro' component={ProviderIntro} />
                <Route path='/registerProvider' component={RegisterProvider} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/purchase' component={Purchase} />
              </Switch>
          </div>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

export default App;
