const initState = {

}

const chatReducer = (state=initState, action) => {
	switch(action.type){
		case 'SEND_MESSAGE_SUCCESS':
			console.log('sended message');
			return state;
		default: 
			return state;
		
		case 'SEND_MESSAGE_ERROR':
			console.log('send message error');
			return state;
	}
}

export default chatReducer;