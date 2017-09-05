import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'

import './css/memo.less'
class Memo extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<div className="title">
					<img src={require('../../../../static/img/memo.jpg')}/>
					<span>备忘录</span>
					<span className="float-right" style={{}}>></span>
					<span id='more' className='float-right' onClick={this.toList.bind(this)} onTouchStart={this.moreTouchStart} onTouchEnd={this.moreTouchEnd}>查看更多</span>
				</div>
				<div className="add-memo" onClick={this.toAddMemo} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
					<div className="add-btn"><img src={require('../../../../static/img/add.jpg')}/><span>新建</span></div>
					<div className="line"></div>
				</div>
			</div>
		)
	}
	toList(){
		hashHistory.push('/memo-list')
	}
	toAddMemo(){
		hashHistory.push('/new-memo')
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('add-memo')[0];
		submit_btn.style.background = '#F1F1F1'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('add-memo')[0];
		submit_btn.style.background = '#FFF'
	}
	moreTouchStart(){
		var dom = document.getElementById('more');
		dom.style.opacity = '0.5'
	}
	moreTouchEnd(){
		var dom = document.getElementById('more');
		dom.style.opacity = '1'
	}
}
export default Memo