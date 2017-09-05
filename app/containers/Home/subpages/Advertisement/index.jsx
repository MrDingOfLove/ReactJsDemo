import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

//subpages
class Advertisement extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="advertisement">
				<marquee direction="left" width="100%">
					<img src={require('../../../../static/img/ad.jpg')}/>
					<span className="ad-detial">即日起所有用户基本水费降低0.1元/吨。请按照公司要求执行。</span>
				</marquee>
			</div>
		)
	}
}
export default Advertisement