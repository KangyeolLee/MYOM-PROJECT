import React, { Component } from 'react'
import CustomerServiceCategory from './CustomerServiceCategory';
import CustomerActivator from './CustomerActivator';
import './customerService.css';


class CustomerService extends Component {
  componentDidMount() {
    const swiper = document.querySelector('.swiper-wrapper');
    const for_noti = document.querySelector('.forNotification');
    const for_quest = document.querySelector('.forQuestionAnswer');
    const for_desc = document.querySelector('.forDescription');
    const noti = document.getElementById('notification');
    const quest = document.getElementById('question-answer');
    const desc = document.getElementById('description');

    swiper.addEventListener('click', (e) => {
      if(e.target.className.includes('forNotification')) {
        noti.classList.remove('active'); for_noti.classList.remove('active');
        quest.classList.remove('active'); for_quest.classList.remove('active');
        desc.classList.remove('active'); for_desc.classList.remove('active');
        
        noti.classList.add('active');
        e.target.classList.add('active');
      } else if(e.target.className.includes('forQuestionAnswer')) {
        noti.classList.remove('active'); for_noti.classList.remove('active');
        quest.classList.remove('active'); for_quest.classList.remove('active');
        desc.classList.remove('active'); for_desc.classList.remove('active');
        
        quest.classList.add('active');
        e.target.classList.add('active');
      } else {
        noti.classList.remove('active'); for_noti.classList.remove('active');
        quest.classList.remove('active'); for_quest.classList.remove('active');
        desc.classList.remove('active'); for_desc.classList.remove('active');
        
        desc.classList.add('active');
        e.target.classList.add('active');
      }
    });
  }

  render() {
    return (
      <div className="customerService notoSans">
        <div className='banner'>
          <div className="text-wrapper">
            <h2 className="center">MYOM 고객센터 입니다.</h2>
            <h3 className="center">무엇을 도와드릴까요?</h3>
            <div className="search-box">
              무엇이든 물어보세요
              <i style={{lineHeight: '1.35'}} className="black-text material-icons small right">search</i>
            </div>
          </div>
        </div>

        <div className="container">
          <CustomerServiceCategory />

          <div id='notification' className="row active">
            <CustomerActivator category='notifications'/>
          </div>

          <div id='question-answer' className="row">
            <CustomerActivator category='question-answer'/>
          </div>

          <div id='description' className="row">
            <CustomerActivator category='description'/>
          </div>

        </div>
      </div>
    )
  }
}

export default CustomerService;