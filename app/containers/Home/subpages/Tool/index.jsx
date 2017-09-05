import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import BtnItem from './btnitem'


class Tools extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<div className="title">
					<img src={require('../../../../static/img/tools.jpg')}/>
					<span>常用工具</span>
				</div>
				<div className="option-btn">
					<div className="optionbtn-content">
						<BtnItem title="抄表管理" src={require('../../../../static/img/meter.jpg')} category = "meter" />
						<BtnItem title="报修管理" src={require('../../../../static/img/repairs.jpg')} category = "repairs" />
						<BtnItem title="举报管理" src={require('../../../../static/img/report.jpg')} category = "report" />
						<div className="clear-fix"></div>
					</div>
				</div>
			</div>
		)
	}
}
export default Tools