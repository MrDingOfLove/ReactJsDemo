import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'
import TitleBlock from '../../../../components/TitleBlock'

import ReportDetialBlock1 from'../Meter/meter-detial-block1'
import ReportDetialBlock2 from './report-detial-block2'
class ReportDetial extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className='report-detial'>
				<NavigationBar title='用户详情'/>
				<div className="topblock"></div>
				<TitleBlock title="用户信息"/>
				<ReportDetialBlock1 id={this.props.params.id}/>
				<TitleBlock title="举报内容"/>
				<ReportDetialBlock2/>
			</div>	
		)
	}
}
export default ReportDetial