import React, { Component } from 'react'
import CommunitySideNav from './CommunitySideNav'
import SideNavTest from './SideNavTest'
import PostList from './PostList'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { compose } from 'redux'
import './community.css'
import Preloader from '../functionalComponents/Preloader';
import { async } from 'q';

class CommunityDashboard extends Component {
	state = {
		limit_list : 12,
		morePosts: [],
		nextRef: null,
		loading: true,
	}
	componentDidMount(){
		M.AutoInit();
		window.addEventListener('scroll', this.infiniteScroll, true);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.posts !== nextProps.posts) {
			this.setState({
				morePosts: nextProps.posts,
			})
		}
	}

	infiniteScroll = () => {
		let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
		let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		let clientHeight = document.documentElement.clientHeight;
		if(scrollTop + clientHeight === scrollHeight){
			this.loadMorePosts();
		}
	}

	loadMorePosts = async () => {
		const { firestore } = this.props;
		const { limit_list, nextRef } = this.state;

		if(!nextRef){
			console.log('state initialized');
			const firstQuery = firestore.collection('posts').where('category', '==', this.props.match.params.category )
				.orderBy('createAt', 'desc').limit(limit_list);
		const firstSnaps = await firstQuery.get();
		const firstVisible = firstSnaps.docs[firstSnaps.size - 1];

		this.setState({
			nextRef: firstVisible,
		})
		}
		try{
			const nextQuery = firestore.collection('posts').where('category', '==', this.props.match.params.category )
				.orderBy('createAt', 'desc').startAfter(this.state.nextRef).limit(limit_list);
			const nextSnaps = await nextQuery.get();
			const nextVisible = nextSnaps.docs[nextSnaps.size -1]

			if(!nextVisible){
				this.setState({
					loading: false,
				})
				return;
			}

			const loadedPosts = nextSnaps.docs.map(doc => {
				const id = doc.id;
				const data = doc.data();
				return {id, ...data }
			})

			return this.setState({
				morePosts : [...this.state.morePosts, ...loadedPosts],
				nextRef: nextVisible,
			})
		} catch(err) {
			console.log('error : ', err);
		}
	}
	render(){
		const { posts, profile, match } = this.props;
		const { morePosts } = this.state;
		console.log(morePosts);
		return(
			<div className="communityDashboard">
				<SideNavTest profile={profile}/>
				<div className="communityTemplate">
					<div className="contents">
						<div className="post-list">
						{
							!isLoaded(posts)
								? <Preloader/>
								: isEmpty(morePosts)
								? <div>등록된 포스트가 없습니다. </div>
								: morePosts.map(post => {	
										return(
											<PostList post= {post} post_id= {post.id} key={post.id}/>
										)
									}) 
						}	
						</div>
					</div>
				</div>
				<div className="fixed-action-btn">
					{ (profile.authority === match.params.category) && 
					<Link to={`${match.url}`+'/createPost'} className="btn-floating btn-large indigo">
						<i className="large material-icons">mode_edit</i>
					</Link>
					}
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return{
		posts: state.firestore.ordered.posts,
		profile: state.firebase.profile
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		return [{ collection: 'posts', where: ['category', '==', props.match.params.category ], orderBy: ['createAt','desc'], limit: 12 }]
	}),
)(CommunityDashboard);