import React, { Component } from 'react';
import M from 'materialize-css';

class BasicProductData extends Component {
	state = {
		serviceTitle: '',
		ability1: '',
		ability2: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		});
	}

	handleChange2 = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	componentDidMount() {
		M.AutoInit();
  }


	render(){
		return(
			<div className="container basic-product-data">
				<div className="row">
					<form onSubmit={this.handleSubmit} className="col l12">
						<div className="row">
							<div className="input-field col l12">
								<input type="text" id="serviceTitle" onChange={this.handleChange} />
								<label htmlFor="serviceTitle">서비스 제목</label>
							</div>
							<div className="input-field col l6">
								<select id="ability1" onChange={this.handleChange2}>
									<option value="" disabled selected>Choose your ability</option>
									<option value="트랜지션의 장인">트랜지션의 장인</option>
									<option value="자막의 달인">자막의 달인</option>
									<option value="시간의 마술사">시간의 마술사</option>
									<option value="보정의 신">보정의 신</option>
								</select>
								<label>제일 자신있는거</label>
							</div>
							<div className="input-field col l6">
								<select id="ability2" onChange={this.handleChange2}>
									<option value="" disabled selected>Choose your ability</option>
									<option value="트랜지션의 장인">트랜지션의 장인</option>
									<option value="자막의 달인">자막의 달인</option>
									<option value="시간의 마술사">시간의 마술사</option>
									<option value="보정의 신">보정의 신</option>
								</select>
								<label>두번쨰로 자신있는거</label>
							</div>
							<div className="input-field right">
								<button className="btn indigo">다음단계로</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default BasicProductData;