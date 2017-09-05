import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import NavigationBar from '../../../../components/NavigationBar'
import TitleBlock from '../../../../components/TitleBlock'

import RepairsDetialBlock1 from'../Meter/meter-detial-block1'
import RepairsDetialBlock2 from'./repairs-detial-block2'

class RepairsDetial extends React.Component{
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
				<RepairsDetialBlock1 id={this.props.params.id}/>
				<TitleBlock title="当前示数"/>
				<RepairsDetialBlock2/>
			</div>	
		)
	}
}
export default RepairsDetial