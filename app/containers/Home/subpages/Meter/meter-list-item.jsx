import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'
class MeterListItem extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="item-detial" onClick={this.toDetial.bind(this)} onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
				<div className="user-info float-left">
					<span className="detial-title">用户编号:</span>
					<span className="detial-content">{this.props.id}</span>
				</div>
				<div className="user-info time float-left">
					<span className="detial-title">当前欠费:</span>
					<span className="detial-title detial-content overdue-money">20.00</span>
					<span className="detial-title">&nbsp;元</span>
				</div>
				<div className="clear-fix"></div>
				<div className="address">
					<span className="detial-title">用户地址:</span>
					<div className="detial-content address-dtial float-right">哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨市利民区北京路利民自来水有限公司大厦A座</div>
					<div className="clear-fix"></div>
				</div>
			</div>
		)
	}
	toDetial(event){
		switch(this.props.category){
			case 'meter':
				hashHistory.push('/meter-detial/'+this.props.id)
				break
			case 'repairs':
				hashHistory.push('/repairs-detial/'+this.props.id)
				break
			case 'report':
				hashHistory.push('/report-detial/'+this.props.id)
				break
		}
	}
	touchStart(event){
		var dom = this.getParent(event.target)
		dom.style.background = '#F1F1F1'
	}
	touchEnd(event){
		var dom = this.getParent(event.target)	
		dom.style.background = '#FFF'
	}
	getParent(node){
		if (node.className =='item-detial') {
			return node;
		}
		return this.getParent(node.parentNode)
	}
}
export default MeterListItem