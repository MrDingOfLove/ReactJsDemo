import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

class MeterDetialBlock2 extends React.Component{
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
					<span>2017-09-09</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">表一：</span>
					<span>100.01</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">表二：</span>
					<span>45.90</span>
				</div>
				<div className="ammeter">
					<span className="detial-title">表二：</span>
					<span>30.00</span>
				</div>
			</div>	
		)
	}
}
export default MeterDetialBlock2