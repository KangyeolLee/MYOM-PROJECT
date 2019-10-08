import React from 'react'
import './footer.css'

const Footer = () => {
	return(
		<footer className='page-footer myomFooter'>
			<div className="container">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="white-text">언틸번아웃 사업자 정보</h5>
						<p className="grey-text text-lighten-4">언틸번아웃 | 서울시 강남구 언주로 98길 25, 5층</p>
						<p className="grey-text text-lighten-4">대표: 이승복 </p>
						<p className="grey-text text-lighten-4">사업자등록번호 : 101-35-92673</p>
						<p className="grey-text text-lighten-4">01092609694 | untilburnout@myom.co.kr</p>
						<p className="grey-text text-lighten-4">호스팅 사업자: Firebase</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 className="white-text">SNS</h5>
						<ul>
							<li><a href="https://www.youtube.com/channel/UC9BIXe8YjejWnqd2r4w11-w" className="grey-text text-lighten-3"><i className="fab fa-youtube"></i></a></li>
							<li><a href="https://www.instagram.com/myom__travel/" className="grey-text text-lighten-3"><i className="fab fa-instagram"></i></a></li>
							<li><a href="https://www.facebook.com/Myom_travel-115307319843663/" className="grey-text text-lighten-3"><i className="fab fa-facebook-square"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					@ 2019 Copyright 언틸번아웃
					<p className="grey-text text-lighten-4 right">본 사이트는 크롬에 최적화되어있습니다. </p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;