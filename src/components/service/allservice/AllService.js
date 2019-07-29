import React from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';

const AllService = ({recommends}) => {
  return (
    <div className="container">

      <ul className="collection">

        <li className="collection-item">
          <h4 className=''>
            PARIS
            <Link to='/thema/PARIS' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row recommendable">
            { recommends && recommends.map(item => {
              return(
                <RecommendService recommendable={item} />
              )
            })}
            {/* <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>          */}
          </div>
        </li>

        <li className="collection-item row">
          <h4 className=''>
            KOREA
            <Link to='/thema/KOREA' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>         
          </div>
        </li>

        <li className="collection-item row">
          <h4 className=''>
            CHINA
            <Link to='/thema/CHINA' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>         
          </div> 
        </li>

        <li className="collection-item row">
          <h4 className=''>
            SPAIN
            <Link to='/thema/SPAIN' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>         
          </div>
        </li>

        <li className="collection-item row">
          <h4 className=''>
            GERMANY
            <Link to='/thema/GERMANY' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>         
          </div>     
        </li>

        <li className="collection-item row">
          <h4 className=''>
            INDIA
            <Link to='/thema/INDIA' className='secondary-content'>
              <span className='waves-effect waves-light btn'>더보기</span>
            </Link>
          </h4>
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">TEST</span>
                </div>
              </div>
            </div>         
          </div>
        </li>

      </ul>

    </div>
  )
}

export default AllService;