import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

class RepairsDetialBlock2 extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="meter-detial-block">
				<div className="ammeter">
					<span className="detial-title">提交时间：</span>
					<span>2017-08-08</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">表一：</span>
					<input className='half' type="text"/>
					<span className="detial-title">（吨）</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">表二：</span>
					<input className='half' type="text"/>
					<span className="detial-title">（吨）</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">简述：</span>
					<input type="text"/>
				</div>
				<div className="ammeter">
					<div className='beizhu'>
						<span className="detial-title">备注：</span>
					</div>
					<textarea name="" id="" rows="5"></textarea>
				</div>
				<div className="btn-block">
					<div className="submit-btn" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>提交</div>
				</div>
			</div>
		)
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('submit-btn')[0];
		submit_btn.style.background = '#2398bf'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('submit-btn')[0];
		submit_btn.style.background = '#29A6CF'
	}
}
export default RepairsDetialBlock2