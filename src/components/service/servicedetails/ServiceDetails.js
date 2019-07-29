import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './servicedetails.css'

const ServiceDetails = () => {
	return(
		<div className="container service-details">
			<div className="row">
				<div className="col s6 m6 l6">
					<img src= "../../img/theme/korea.jpg" alt="" className='responsive-img'/>
				</div>
				<div className="col s6 m6 l6 push-l1 productIntro">
					<div className="card">
						<div className="card-content">
						  <h5 className="center product-title">쓉오지는 감성영상 만들어 드립니다. </h5>
							<h5 className="right product-price">330000원</h5>
							{ /* title = product.title이 될 것이고, content = product.intro */}
							<div className="product-summary-box">
								<div className="product-summary">
									<p>330000원 Standard</p>
									<div className="divider"></div>
									<p>여행의 대미를 장식해줄 영상하나</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col s12 l12 m12">
					<div className="productMainIntro">
						{ /* product.mainIntro */}
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>

					</div>
				</div>
				<div className="col s12 l12 m12">
					<ul className="collection productQnA">
						<li className="collection-header"><h4>문의하기</h4></li>
						<li className="collection-item"><div>홈페이지 제작 문의드립니다..</div></li>
						<li className="collection-item"><div>질문있습니다..</div></li>
						<li className="collection-item"><div>앙질문띠.</div></li>
						<li className="collection-item"><div>질문있습니다.</div></li>
					</ul>
				</div>
				<div className="col s12 l12 m12">
					<ul className="collection productReview">
						<li className="collection-header"><h4>Reviews</h4></li>
						<li className="collection-item avatar">
							<img src="img/theme/korea.jpg" className="circle"/>
							<span className="title">넘모 좋았어용</span>
							<p>이야 진짜 영상퀄리티 쥑임다 <br/>
								꼭써보십쇼
							</p>
						</li>
						<li className="collection-item avatar">
							<img src="img/theme/paris.jpg" className="circle"/>
							<span className="title">넘모 좋았어용</span>
							<p>이야 진짜 영상퀄리티 쥑임다 <br/>
								꼭써보십쇼
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="container suggestion">

			</div>
		</div>
	)
}

export default ServiceDetails