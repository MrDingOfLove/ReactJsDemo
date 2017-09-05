import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import NavigationBar from '../../components/NavigationBar'
import TitleBlock from '../../components/TitleBlock'
class ChangePwd extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="change-pwd">
				<NavigationBar title="用户详情"/>
				<div className="topblock"></div>
				<TitleBlock title="用户信息"/>
				<div className="user-info">
					<div className="user-name">
						<span className="detial-title">抄表员：</span><span>张大卫</span>
					</div>
					<div className="user-id">
						<span className="detial-title">员工编号：</span><span>S000001</span>					
					</div>
				</div>
				<TitleBlock title="修改密码"/>
				<div className="change-form">
					<div className="password">
						<span className="detial-title">输入旧密码：</span>
						<input type="password"/>
					</div>
					<div className="password">
						<span className="detial-title">输入新密码：</span>
						<input type="password"/>
					</div>
					<div className="password">
						<span className="detial-title">确认新密码：</span>
						<input type="password"/>
					</div>
					<div className="btn-block">
						<div className="submit-btn" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>修改</div>
					</div>
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
export default ChangePwd