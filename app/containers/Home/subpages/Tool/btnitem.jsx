import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'
class Btnitem extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="btn-item float-left">
				<div className="btn-img" onClick={this.toTool.bind(this)}><img src={this.props.src}/></div>
				<div className="btn-title">{this.props.title}</div>
			</div>
		)
	}
	toTool(){
		switch(this.props.category){
			case 'meter':
				hashHistory.push('/meter')
				break
			case 'repairs':
				hashHistory.push('/repairs')
				break
			case 'report':
				hashHistory.push('/report')
				break
			default:
				break
		}
	}
}
export default Btnitem