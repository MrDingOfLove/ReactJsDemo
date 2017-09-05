import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'

import './tabBar.less'
class TabBar extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			'home_src': './img/home_active.jpg',
			'history_src': './img/history.jpg',
			'mine_src': './img/mine.jpg'
		}
	}
	render(){
		return (
				<div className = "tabbar">
					<div className = "tabbar-item float-left" >
						<div className="tabbar-img"><img src={require(this.state.home_src)} onClick={this.toHome.bind(this)}/></div>
						<div className="tabbar-title">首页</div>
					</div>
					<div className = "tabbar-item float-left">
						<div className="tabbar-img"><img src={require(this.state.history_src)} onClick={this.toHistory.bind(this)}/></div>
						<div className="tabbar-title">历史记录</div>
					</div>
					<div className = "tabbar-item float-left" >
						<div className="tabbar-img"><img src={require(this.state.mine_src)} onClick={this.toMine.bind(this)}/></div>
						<div className="tabbar-title">我的</div>
					</div>
					<div className="clear-fix"></div>
				</div>
		)
	}
	toHome(){
		this.setState({
			'home_src': './img/home_active.jpg',
			'history_src': './img/history.jpg',
			'mine_src': './img/mine.jpg'
		})
		hashHistory.push('/')
	}
	toHistory(){
		this.setState({
			'home_src': './img/home.jpg',
			'history_src': './img/history_active.jpg',
			'mine_src': './img/mine.jpg'
		})
		hashHistory.push('/history')
	}
	toMine(){
		this.setState({
			'home_src': './img/home.jpg',
			'history_src': './img/history.jpg',
			'mine_src': './img/mine_active.jpg'
		})
		hashHistory.push('/mine')
	}
}
export default TabBar