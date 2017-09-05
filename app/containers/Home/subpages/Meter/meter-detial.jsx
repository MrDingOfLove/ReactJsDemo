import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'

import NavigationBar from '../../../../components/NavigationBar'
import TitleBlock from '../../../../components/TitleBlock'

import MeterDetialBlock1 from'./meter-detial-block1'
import MeterDetialBlock2 from'./meter-detial-block2'
import MeterDetialBlock3 from'./meter-detial-block3'
class MeterDetial extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<NavigationBar title="用户详情"/>
				<div className="topblock"></div>
				<TitleBlock title="用户信息"/>
				<MeterDetialBlock1 id={this.props.params.id}/>
				<TitleBlock title="上月表度数"/>
				<MeterDetialBlock2/>
				<TitleBlock title="抄表提交"/>
				<MeterDetialBlock3/>
			</div>
		)
	}
}
export default MeterDetial