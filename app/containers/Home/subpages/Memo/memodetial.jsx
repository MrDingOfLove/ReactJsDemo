import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'
import { hashHistory } from 'react-router'
class NewDetial extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="memo-detial">
				<NavigationBar title='备忘录详情'/>
				<div className="topblock"></div>
				<div className="memo-content">
					<div className="memo-title">利民小区张三</div>
					<div className="memo-time">2017年9月9日</div>
					<div className="clear-fix"></div>
					<div className="memo-detial">利民小区张三当天不在家，表数据未记录，已通知该用户近期会再上门抄录数据。利民小区张三当天不在家，表数据未记录，已通知该用户近期会再上门抄录数据。</div>
				</div>
				<div className='operation-btn'>
					<img onClick={this.toDelete.bind(this)} className='edit-img' src={require('../../../../static/img/delete.jpg')}/>
					<img onClick={this.toEdit.bind(this)} className='edit-img' src={require('../../../../static/img/edit.jpg')}/>
					<div className="clear-fix"></div>
				</div>
			</div>
		)
	}
	toEdit(event){
		hashHistory.push('/memo-edit/'+'111')
		event.stopPropagation();
	}
	toDelete(){
		alert('删除');
		event.stopPropagation();
	}
}
export default NewDetial