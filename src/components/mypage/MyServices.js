import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Preloader from '../functionalComponents/Preloader';
import Pagination from '../functionalComponents/Pagination';
import M from 'materialize-css';
import './myServices.css';

class MyServices extends Component {
  state = {
    curPage: 1,
    perPage: 5,
  }
  componentDidMount() {
    M.AutoInit();
  }

  paginate = (pageNum) => {
    this.setState({
      curPage: pageNum,
    })
  }

  render() {
    const { services } = this.props;
    // options for Pagination
    const { curPage, perPage } = this.state;
    const indexOfLast = curPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentServices = !isLoaded(services) ? null : services.slice(indexOfFirst, indexOfLast);
    console.log(currentServices);

    return (
      <div className="myServices">
        <div className="row">
          <h4>나의 서비스</h4>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s2"><a href="#sellAll">전체 ({!isLoaded(services) ? '..' : isEmpty(services) ? 0 : services.length})</a></li>
              <li className="tab col s2"><a href="#selling">판매중 (0)</a></li>
              <li className="tab col s2"><a href="#waiting">승인대기중 (0)</a></li>
              <li className="tab col s2"><a href="#forbidden">판매중지 (0)</a></li>
              <li className="tab col s2"><a href="#notAllowed">비승인 (0)</a></li>
            </ul>
          </div>

          <div id="sellAll">
            {
              !isLoaded(services)
                ? <div className="collection"><Preloader /></div>
                : isEmpty(services)
                  ? (
                    <div className="collection">
                      <div className="collection-wrapper center">
                        <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                        <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                        <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
                      </div>
                    </div>
                  )
                  : currentServices.map(item => (
                      <div className="collection notEmpty" key={item.id}>
                        <div className="collection-item">
                          <div className="image-area">
                            <img src={item.imgURL} alt="" width={300} height={200} />
                          </div>
                          <div className="text-area">
                            <h5>카테고리 : {item.category}</h5>
                            <div className="inquiry-area">
                              <p>등록된 문의개수 : {item.inquiryCount}</p>
                            </div>
                            <div className="review-area">
                              <p>등록된 리뷰개수 : {item.reviewCount}</p>
                            </div>
                          </div>
                          <div className='link-wrapper'>
                            <Link to={`/thema/${item.category}/${item.id}`}>게시글 보러가기</Link>
                            <Link to={{
                              pathname: '/serviceRegister',
                              service_type: `${item.category}`,
                              service_img: `${item.imgURL}`,
                              service_desc: `${item.description[0].contents}`,
                              service_process: `${item.description[1].contents}`,
                              service_doing: `${item.description[2].contents}`,
                              service_style: `${item.description[3].contents}`,
                              service_price_standard: `${item.prices[0].price}`,
                              service_price_deluxe: `${item.prices[1].price}`,
                              service_price_premium: `${item.prices[2].price}`,
                              standard_desc: `${item.prices[0].contents}`,
                              deluxe_desc: `${item.prices[1].contents}`,
                              premium_desc: `${item.prices[2].contents}` }}>
                              게시글 수정하기</Link>
                            <Link to=''>게시글 삭제하기</Link>
                          </div>
                        </div>
                      </div>
                  ))
            }

            {
              !isLoaded(services)
                ? null
                : <Pagination pages={Math.ceil(services.length / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            }
            
          </div>

          <div id="selling">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>
          </div>

          <div id="waiting">
           <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>   
          </div>

          <div id="forbidden">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>   
          </div>

          <div id="notAllowed">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    services: state.firestore.ordered.services,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'services', where: [ 'serviceProvider', '==', props.auth.uid], orderBy: ['timestamp', 'desc'], storeAs: 'services' },
  ]),
)(MyServices);