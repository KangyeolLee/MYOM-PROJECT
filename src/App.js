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
import UserProfile from './components/profile/UserProfile'
import AlarmSetting from './components/profile/AlarmSetting'
import Changepwd from './components/profile/Changepwd'
import Withdrawal from './components/profile/Withdrawal'
import Certifications from './components/profile/Certifications'
import MypageForProvider from './components/mypage/MypageForProvider';
import BasicProductData from './components/product/BasicProductData'
import ServiceRegister from './components/serviceForm/ServiceRegister';
import ForgotIdPwd from './components/auth/ForgotIdPwd';
import EmailVerification from './components/auth/EmailVerification'
import CommunityDashboard from './components/community/CommunityDashboard';
import CreatePost from './components/community/CreatePost';
import PostDetails from './components/community/PostDetails';
import ChatDashboard from './components/chats/ChatDashboard';

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
                <Route path='/mypageBuyer' component={MypageForBuyer} />}
                {/* <Route path='/profileSetting' component={ProfileSetting} />
                <Route path='/mypageBuyer/paymentDetails' component={PaymentDetails} />
                <Route path='/mypageBuyer/coupons' component={CouponPage} />
                <Route path='/mypageBuyer/estimate' component={EstimatePage} />
                <Route path='/mypageBuyer/orderManage' component={OrderManage} /> */}
                <Route path='/mypageProvider' component={MypageForProvider} />
                <Route path='/purchase' component={Purchase} />
                <Route path='/purchasedone' component= { PurchaseDone } />
                <Route path='/profile' component = { UserProfile } />
                <Route path='/alarmsetting' component = { AlarmSetting } />
                <Route path='/changepwd' component= { Changepwd } />
                <Route path='/withdrawal' component= { Withdrawal } />
                <Route path='/certifications' component= { Certifications } />
                <Route path='/product' component= {BasicProductData} />
                <Route path='/serviceRegister' component={ServiceRegister} />
                <Route path= '/forgotIdPwd' component={ForgotIdPwd} />
                <Route path= '/emailVerification' component = {EmailVerification} />
                <Route exact path= '/community/:category' component = { CommunityDashboard } />
                <Route exact path= '/community/:category/createPost' component = { CreatePost } />
                <Route exact path= '/post/:id' component = { PostDetails }/>
                <Route path= '/chatDashboard' component = { ChatDashboard} />
              </Switch>
          </div>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

export default App;
