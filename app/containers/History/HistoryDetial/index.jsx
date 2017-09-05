import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import NavigationBar from '../../../components/NavigationBar'
import TitleBlock from '../../../components/TitleBlock'
import HistoryDetialBlock1 from '../../Home/subpages/Meter/meter-detial-block1'
import HistoryDetialBlock2 from '../../Home/subpages/Meter/meter-detial-block2'
import HistoryDetialBlock3 from './history-detial-block3'
class HistoryDetial extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="history-detial">
				<NavigationBar title='历史详情记录'/>
				<div className="topblock"></div>
				<TitleBlock title='用户信息'/>
				<HistoryDetialBlock1 id={this.props.params.id}/>
				<TitleBlock title='表度数'/>
				<HistoryDetialBlock2/>
				<TitleBlock title='报修记录'/>
				<HistoryDetialBlock3/>
			</div>
		)
	}
}
export default HistoryDetial