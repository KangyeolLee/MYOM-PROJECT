import React, { Component } from 'react'
import CustomerServiceCategory from './CustomerServiceCategory';
import CustomerActivator from './CustomerActivator';
import CustomerServiceDesc from './CustomerServiceDesc';
import './customerService.css';


class CustomerService extends Component {
  componentDidMount() {
    const swiper = document.querySelector('.swiper-wrapper');
    const noti = document.getElementById('notification');
    const quest = document.getElementById('question-answer');
    const desc = document.getElementById('description');

    swiper.addEventListener('click', (e) => {
      if(e.target.className.includes('forNotification')) {
        noti.classList.remove('active');
        quest.classList.remove('active');
        desc.classList.remove('active');
        
        noti.classList.add('active');
      } else if(e.target.className.includes('forQuestionAnswer')) {
        noti.classList.remove('active');
        quest.classList.remove('active');
        desc.classList.remove('active');
        
        quest.classList.add('active');
      } else {
        noti.classList.remove('active');
        quest.classList.remove('active');
        desc.classList.remove('active');
        
        desc.classList.add('active');
      }
    });
  }
  render() {
    return (
      <div className="customerService container">
        <div className="row serviceTitle">
          <h2 className="scorehvy col s12 center">MYOM 고객센터 입니다.</h2>
          <h2 className="scorehvy col s12 center">무엇을 도와드릴까요?</h2>
        </div>

        <CustomerServiceCategory />

        <div id='notification' className="row active">
          <h5 className="scorelt myomColor">공지사항</h5>
          <CustomerActivator category='notifications'/>
        </div>

        <div id='question-answer' className="row">
          <h5 className="scorelt myomColor">FAQ</h5>
          <CustomerActivator category='question-answer'/>
        </div>

        <div id='description' className="row">
          <h5 className="scorelt myomColor">약관전문</h5>
          <CustomerActivator category='description'/>
        </div>

      </div>
    )
  }
}

export default CustomerService;