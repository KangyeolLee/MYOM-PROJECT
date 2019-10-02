import React, {Component } from 'react'

const RequestStep5 = (props) => {
	if(props.currentStep !== 5) return null;
	return(
		<div className="card-content">
			<h6>꼭 들어갔으면 하는 컷이 있나요?</h6>
			<div className="input-field">
				<input type="text" id='essential_cut' onChange={props.handleChange} value={props.essential_cut}/>
			</div>
			<div className="divider white"></div>
			<h6>생각해두신 영상순서가 있으신가요? (파일을 라벨링하여 전달해주세요)</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>시간의 흐름</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>색감맞춰서</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>편집자님께 맡길게요</span>
				</label>
			</p>
			<div className="divider"></div>
			<h6>영상에 자막이 얼마나 들어가면 좋을까요?</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>자막없이 해주세요.</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>오프닝과 앤딩, 장소별 이름정도</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>여행지의 정보정도는 들어갔으면 좋겠어요</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>멘트들이 어느정도 자막화됐으면 좋겠다.</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>기타</span>
				</label>
			</p>
			<div className="divider white"></div>
			<h6>원하시는 자막의 폰트가 있으면 적어주세요.</h6>
			<div className="input-field">
				<input type="text" id='subtitle_font' onChange={props.handleChange} value={props.subtitle_font}/>
			</div>
			<div className="divider"></div>
			<h6>어떤음악을 원하세요? (1)</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>무료음원</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>유료음원</span>
				</label>
			</p>
			<div className="divider white"></div>
			<h6>어떤음악을 원하세요? (2)</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>신나는</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>감성적인</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>몽환적인</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>트렌디한</span>
				</label>
			</p>
			<div className="divider white"></div>
			<h6>원하시는 음악이 있으시면 적어주세요.</h6>
			<div className="input-field">
				<input type="text" id='wantMusic' onChange={props.handleChange} value={props.wantMusic}/>
			</div>
		</div>
	)
}

export default RequestStep5;