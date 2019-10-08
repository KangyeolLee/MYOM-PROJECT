import React, { Component } from 'react';
import './kakao.css'

class Kakao extends Component {
	componentDidMount() {
    window.Kakao.init('6bfd8b4394f18953368e36d63b1a2461')
    window.Kakao.Channel.createChatButton({
      container: '#kakao-talk-channel-chat-button',
			channelPublicId: '_cjrNT',
			title: 'question'
		})

	}

	render(){
		return(
			<div id="kakao-btn">
				<img src="/img/kakao_small.png" alt=""/>
				<div id="kakao-talk-channel-chat-button"></div>
			</div>
		)
	}
}

export default Kakao;
