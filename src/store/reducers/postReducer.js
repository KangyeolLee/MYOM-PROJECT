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
		
		default:
			return state;
	}
}

export default postReducer;