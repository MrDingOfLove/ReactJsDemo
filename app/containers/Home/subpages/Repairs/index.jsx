import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'

import QueryForm from './repairs-queryform'
import MeterListItem from '../Meter/meter-list-item'
import './css/repairs.less'
class Repairs extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			title:'报修管理'
		}
	}
	render(){
		return (
			<div className="repairs">
				<NavigationBar title={this.state.title}/>
				<div className="topblock"></div>
				<QueryForm superLink={this}/>
				<div className="list">
					<div className="item-line"></div>
					<MeterListItem id='S0000001' category='repairs'/>
					<MeterListItem id='S0000002' category='repairs'/>
					<MeterListItem id='S0000003' category='repairs'/>
					<MeterListItem id='S0000004' category='repairs'/>
					<MeterListItem id='S0000005' category='repairs'/>
				</div>
			</div>	
		)
	}
}
export default Repairs