import React from 'react'
import { Link } from 'react-router-dom'
import './community.css'

const CommunitySideNav = () => {
	return(
		<div className="community_sidenav">
			<div className="collection with-header">
				<div className="collection-header"><h4>커뮤니티</h4></div>
				<Link to='/community' className="collection-item black-text">Myom Tip</Link>
				<Link to='/certifications' className="collection-item black-text">일반인 Tip</Link>
				<Link to='/certifications' className="collection-item black-text">편집자 Tip</Link>
			</div>
		</div>
	)
}

export default CommunitySideNav