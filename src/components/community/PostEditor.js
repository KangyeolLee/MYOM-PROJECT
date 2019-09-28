import React, {Component} from 'react'
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js'
import './postEditor.css'

class PostEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
	}

	onChange = (editorState) => {
		this.setState({
			editorState
		});
	}

	handleKeyCommand = (command) =>{
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		if(newState) {
			this.onChange(newState);
			return 'handled'
		}
		return 'not-handled'
	};

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};
	
	render(){
		console.log(this.state);
		return (
			<div className="container">
				<button onClick = {this.onUnderlineClick}>U</button>
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
				<div className="editor">
					<DraftEditor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand}/>
				</div>
			</div>
		)
	}
}

export default PostEditor;