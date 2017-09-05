import React from 'react'
import { render } from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'
import './login.less'

const  height = window.innerHeight;
class Login extends React.Component{
	render(){
		return (
			<div className="login" ref='login'>
				<div className="logo">
					<img src={require('../../static/img/icon.jpg')}/>
				</div>
				<div className="input_block">
					<div className="count">
						<img src={require('../../static/img/count.jpg')}/>
						<input type="text" placeholder='请输入账号'/>
					</div>
					<div className="count">
						<img src={require('../../static/img/pwd.jpg')}/>
						<input type="password" placeholder='请输入密码'/>
					</div>
					<div className="login-btn" ref='login_btn' onClick={this.login.bind(this)} onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>登录</div>
				</div>	
			</div>
		)
	}
	componentDidMount(){
		var login = this.refs.login
		login.style.height = height + 'px'
	}
	touchStart(){
		var login_btn = this.refs.login_btn;
		login_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #089d7b 100%)'
	}
	touchEnd(){
		var login_btn = this.refs.login_btn;
		login_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #00B38A 100%)'
	}
	login(){
		hashHistory.push('/home')
	}
}
export default Login