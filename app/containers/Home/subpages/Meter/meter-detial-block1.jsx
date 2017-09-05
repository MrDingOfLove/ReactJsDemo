import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

class MeterDetialBlock1 extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="meter-detial-block">
				<div className="item-detial">
					<div className="user-info float-left">
						<span className="detial-title">用户编号：</span>
						<span>{this.props.id}</span>
					</div>
					<div className="user-info time float-left">
						<span className="detial-title">当前欠费：</span>
						<span className="detial-title overdue-money">20.00</span>
						<span className="detial-title detial-content">元</span>
					</div>
					<div className="clear-fix"></div>
					<div className="address">
						<span className="detial-title">用户地址：</span>
						<div className="address-dtial float-right">哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨市利民区北京路利民自来水有限公司大厦A座</div>
						<div className="clear-fix"></div>
					</div>
					<div className="float-left">
						<span className="detial-title">排污费：</span>
						<span className="detial-content">4</span>
						<span className="detial-content">元/吨</span>
					</div>
					<div className="float-left">
						<span className="detial-title" style={{marginLeft:'30px',}}>生活用水费：</span>
						<span>5</span>
						<span className="detial-content">元/吨</span>
					</div>
					<div className="clear-fix"></div>
					<div className="address">
						<span className="detial-title">其他(供暖)费：</span>
						<span>3</span>
						<span className="detial-content">元/吨</span>
						<div className="clear-fix"></div>
					</div>
				</div>
			</div>	
		)
	}
}
export default MeterDetialBlock1