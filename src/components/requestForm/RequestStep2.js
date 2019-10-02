import React, {Component } from 'react'

const RequestStep2 = (props) => {
	if(props.currentStep !== 2) return null;
	return(
		<div className="card-content">
			<div id="editStyle">
				<h6>어떤 편집 스타일을 원하세요?</h6>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='cinematic'/>
						<span>시네마틱형</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='dynamic'/>
						<span>다이나믹형</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='variety'/>
						<span>예능형</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='documentary'/>
						<span>다큐멘터리형</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='v-log'/>
						<span>브이로그형</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox"/>
						<span>기타 : </span>
					</label>
				</p>
			</div>
			<div className="divider"></div>
			<div id="editFeeling">
				<h6>어떤 느낌이면 좋을까요?</h6>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='sensitive'  />
						<span>감각적인</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='truely'/>
						<span>사실적인</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='narrative'/>
						<span>서술적인</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='colorful'/>
						<span>색감좋은</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='experimental'/>
						<span>실험적인</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='aggrow'/>
						<span>이목끄는</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='trendy'/>
						<span>트렌디한</span>
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" onChange={props.handleCheck} id='B-byungmat'/>
						<span>B급병맛</span>
					</label>
				</p>
			</div>
		</div>
	)
}

export default RequestStep2;