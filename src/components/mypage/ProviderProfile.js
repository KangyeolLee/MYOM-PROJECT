import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import './providerProfile.css'
import Preloader from '../functionalComponents/Preloader';

class ProviderProfile extends Component {
	render(){
		console.log(this.props.profileData)
		const { profileData } = this.props
		return(
			<Fragment>
			{
				!isLoaded(profileData) ?
				<Preloader />
				:
				<div className="provider-profile">
					<div className="row">
						<h5 className="col s12 scorehvy sub-title">편집자 프로필관리</h5>
						<div className="col s12 provider">
							<div className="col s4">
								<img src={profileData[0].profileImgURL} width='150px' height='150px' className='circle' alt=""/>
								<p>{profileData[0].intro}</p>
								<div className="skill">
									<h6>작업툴 숙련도</h6>	
									<ul>
										<li className= { "skill-percentage skill-percentage" + profileData[0].editorTool[0].tool0.percent}>{profileData[0].editorTool[0].tool0.name}</li>
										<li className="skill-percentage">프리미어프로</li>
										<li className="skill-percentage">포토샵</li>
									</ul>
								</div>
							</div>
							<div className="col s8">
								<h6>경력 및 이력사항</h6>	
								<ul className='career'>
									<li>2017년~2018년 <span>cj제일제당 편집팀</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth,
		profileData: state.firestore.ordered.profileData,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		const uid = !isLoaded(props.auth.uid) ? null: props.auth.uid;
		return [
			{ collection: 'providersTest', where: ['uid', '==', uid], storeAs: 'profileData'}
		]
	}))(ProviderProfile);