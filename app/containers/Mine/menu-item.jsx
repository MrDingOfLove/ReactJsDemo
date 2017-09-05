import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'
class MenuItem extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="menu-item" onClick={this.toChangePwd} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
				<img className='float-left img1' src={require('../../static/img/changepwd.jpg')}/>
				<span>{this.props.title}</span>
				<img className='float-right img2' src={require('../../static/img/go.jpg')}/>
			</div>
		)
	}
	toChangePwd(){
		hashHistory.push('change-pwd')
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('menu-item')[0];
		submit_btn.style.background = '#F1F1F1'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('menu-item')[0];
		submit_btn.style.background = '#FFF'
	}
}
export default MenuItem