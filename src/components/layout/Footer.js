import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
	return(
		<footer className='page-footer myomFooter'>
			<div className="container">
				<div className="row">
					<div className="col l6 m6 s12">
						<h6 className="white-text scorelt">언틸번아웃 사업자 정보</h6>
						<p className="grey-text text-lighten-4">언틸번아웃 | 서울시 강남구 언주로 98길 25, 5층</p>
						<p className="grey-text text-lighten-4">대표: 황제홍,이승복,이한결,이강열 </p>
						<p className="grey-text text-lighten-4">사업자등록번호 : 101-35-92673</p>
						<p className="grey-text text-lighten-4">01092609694 | untilburnout@myom.co.kr</p>
						<p className="grey-text text-lighten-4">호스팅 사업자: Firebase</p>
					</div>

					<div className="col l6 m6 s12">
            <div style={{position: 'relative'}} className="row">
              <div className="col s6">
                <h6 className="white-text scorelt">SNS</h6>
                <ul className='sns-list'>
                  <li><p><a target='_blank' href="https://www.youtube.com/channel/UC81qyqnHPfxzP34G7__ZXdg" className="grey-text text-lighten-3"><i style={{fontSize: '20.5px'}} className="fab fa-youtube"></i><span className='sns-text'>유튜브</span></a></p></li>
                  <li><p><a target='_blank' href="https://www.instagram.com/myom__travel/" className="grey-text text-lighten-3"><i style={{fontSize: '22.5px'}} className="fab fa-instagram"></i><span className='sns-text'>인스타</span></a></p></li>
                  <li><p><a target='_blank' href="https://www.facebook.com/Myom_travel-115307319843663/" className="grey-text text-lighten-3"><i style={{fontSize: '22.5px'}} className="fab fa-facebook-square"></i><span className='sns-text'>페이스북</span></a></p></li>
                </ul>
              </div>

              <br/>

              <Link to='/customerService' className="col s6 white-text" style={{position: 'absolute', top: 0}}>
                <h6 className="white-text scorelt">고객센터</h6>
                <p>공지사항</p>
                <p>FAQ</p>
                <p>약관전문</p>
              </Link>

            </div>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					<p className='center'>@ 2019 Copyright 언틸번아웃</p>
					<p className="center">본 사이트는 크롬에 최적화되어있습니다. </p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;