const initState = {

}

const editorReducer = (state=initState, action) => {
	switch(action.type){
		case 'INTRODUCTION_REGISTER_SUCCESS' :
			console.log('intro register success');
			return state;
		
		case 'INTRODUCTION_REGISTER_ERROR' :
			console.log('intro register error');
			return state;
		
		default:
			return state;
	}
}

export default editorReducer;