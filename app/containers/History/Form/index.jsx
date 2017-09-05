import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
	
class FromView extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="formbody">
				<div className="item float-left">
					<select name="range">
						<option value="day">最近三天记录</option>
						<option value="week">最近一周记录</option>
						<option value="month">最近一个月记录</option>
					</select>
				</div>
				<div className="item float-left">
					<div className="search-btn" onClick={this.showList.bind(this)} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>点击查询</div>
				</div>
				<div className="clear-fix"></div>
			</div>
		)
	}
	showList(){
		this.props.showList()
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('search-btn')[0];
		submit_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #069b79 100%)'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('search-btn')[0];
		submit_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #00B38A 100%)'
	}
}
export default FromView