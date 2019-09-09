const initState = {

}

const postReducer = (state=initState, action) => {
	switch(action.type){
		case 'CREATE_POST' :
			console.log('created post', action.post)
			return state;
		
		case 'CREATE_POST_ERROR' :
			console.log('create project error', action.err);
			return state;
		
		case 'UPDATE_POST_SUCCESS' :
			console.log('update post success', action.post);
			return state;
		
		case 'UPDATE_POST_ERROR' :
			console.log('update post error', action.err);
			return state;

		case 'CREATE_COMMENTS_SUCCESS' :
			console.log('create comments success', action.commentData);
			return state;
		
		case 'CREATE_COMMENTS_ERROR' :
			console.log('create comments error', action.err);
			return state;
		
		case 'DELETE_COMMENT_SUCCESS' :
			console.log('delete comment success');
			return state;
		
		case 'DELETE_COMMENT_ERROR' :
			console.log('delete comment error', action.err);
			return state;
 
		case 'UPDATE_COMMENT_SUCCESS' :
			console.log('update comment success');
			return state;
		
		case 'UPDATE_COMMENT_ERROR' :
			console.log('update comment error');
			return state;

		default:
			return state;
	}
}

export default postReducer;