import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBox extends Component {
	render(){
		const {classes} = this.props;
		return(
			<div className= {classes.chatTextBoxContainer}>Hello from chat text box</div>
		)
	}
}

export default withStyles(styles)(ChatTextBox);