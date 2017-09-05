import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'
import QueryForm from './meter-queryform'
import MeterListItem from './meter-list-item'

import './css/meter.less'
class Meter extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			title:'抄表管理'
		}
	}
	render(){
		return (
			<div className="meter">
				<NavigationBar title={this.state.title}/>
				<div className="topblock"></div>
				<QueryForm superLink={this}/>
				<div className="list">
					<div className="item-line"></div>
					<MeterListItem id='S0000001' category='meter'/>
					<MeterListItem id='S0000002' category='meter'/>
					<MeterListItem id='S0000003' category='meter'/>
					<MeterListItem id='S0000004' category='meter'/>
				</div>
			</div>	
		)
	}
}
export default Meter