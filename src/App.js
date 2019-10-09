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
import MypageForBuyer from './components/mypage/MypageForBuyer';
// import ProfileSetting from './components/mypage/ProfileSetting';
// import PaymentDetails from './components/mypage/PaymentDetails';
// import CouponPage from './components/mypage/CouponPage';
// import EstimatePage from './components/mypage/EstimatePage';
// import OrderManage from './components/mypage/OrderManage';
import Purchase from './components/consumer/Purchase'
import PurchaseDone from './components/consumer/PurchaseDone'
import PurchaseDetails from './components/consumer/PurchaseDetails';
import MypageForProvider from './components/mypage/MypageForProvider';
import ServiceRegister from './components/serviceForm/ServiceRegister';
import ForgotIdPwd from './components/auth/ForgotIdPwd';
import EmailVerification from './components/auth/EmailVerification'
import CommunityDashboard from './components/community/CommunityDashboard';
import CreatePost from './components/community/CreatePost';
import PostDetails from './components/community/PostDetails';
import ChatDashboard from './components/chats/ChatDashboard';
import CreateService from './components/serviceForm/CreateService';
import Mainpage from './design-concept/Mainpage';
import Categorypage from './design-concept/Categorypage';
import Servicepage from './design-concept/Servicepage';
import PostEditor from './components/community/PostEditor';
import RequestForm from './components/requestForm/RequestForm';
import ProviderRegister from './components/provider/ProviderRegister';
import ProviderRegisterDone from './components/provider/ProviderRegisterDone';

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
                <Route path='/providerRegister' component={ProviderRegister} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/providerRegisterDone' component={ProviderRegisterDone} />
                <Route path='/mypageBuyer' component={MypageForBuyer} />}
                {/* <Route path='/profileSetting' component={ProfileSetting} />
                <Route path='/mypageBuyer/paymentDetails' component={PaymentDetails} />
                <Route path='/mypageBuyer/coupons' component={CouponPage} />
                <Route path='/mypageBuyer/estimate' component={EstimatePage} />
                <Route path='/mypageBuyer/orderManage' component={OrderManage} /> */}
                <Route path='/mypageProvider' component={MypageForProvider} />
                <Route path='/purchase/:service_id' component={Purchase} />
                <Route path='/purchasedone/:service_id' component= { PurchaseDone } />
                <Route path='/purchaseDetails/:service_id' component={PurchaseDetails} />
                {/* <Route path='/serviceRegister' component={ServiceRegister} /> */}
                <Route path= '/forgotIdPwd' component={ForgotIdPwd} />
                <Route path= '/emailVerification' component = {EmailVerification} />
                <Route exact path= '/community/:category' component = { CommunityDashboard } />
                <Route exact path= '/community/:category/createPost' component = { CreatePost } />
                <Route exact path= '/post/:id' component = { PostDetails }/>
                <Route exact path='/chatDashboard' component={ChatDashboard} />
                {/* <Route path='/chatDashboard/:nickname' component = {ChatDashboard} /> */}
                <Route path='/createService' component={CreateService} />
                <Route path='/Mainpage-design' component={Mainpage} />
                <Route path='/Categorypage-design' component={Categorypage} />
                <Route path='/Servicepage-design' component={Servicepage} />
                <Route path='/postEditor' component={PostEditor} />
                <Route path='/requestForm/:id' component={RequestForm} />
              </Switch>
          </div>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

export default App;
