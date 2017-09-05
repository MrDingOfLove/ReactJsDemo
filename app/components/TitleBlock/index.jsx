import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import './titleblock.less'
class Meter extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="titleblock">
				<div className="titleblock-title">{this.props.title}</div>
				<div className="titleblock-line"></div>
			</div>	
		)
	}
}
export default Meter