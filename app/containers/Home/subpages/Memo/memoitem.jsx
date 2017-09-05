import React from 'react'

import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import { hashHistory } from 'react-router'
class MemoItem extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="memo" onClick={this.toDetial.bind(this)} onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
				<div className="float-left">
					<div className="memo-name ">利民小区张三</div>
					<div className='memo-time'>2017-08-08</div>
				</div>
				<div className="edit">
					<img onClick={this.toDelete.bind(this)} className='edit-img' src={require('../../../../static/img/delete.jpg')}/>
					<img onClick={this.toEdit.bind(this)} className='edit-img' src={require('../../../../static/img/edit.jpg')}/>	
				</div>
				<div className="clear-fix"></div>
				<div className="memo-detial">利民小区张三当天不在家，表数据未记录，已通知该用户近期会再上门抄表…</div>
				<div className="item-line"></div>
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
	toDetial(event){
		if (event.target.className != 'edit-img') {
			hashHistory.push('/memo-detial/'+'111')
		}
	}
	touchStart(event){
		if (event.target.className != 'edit-img') {
			var dom = this.getParent(event.target)
			dom.style.background = '#F1F1F1'
		}
	}
	touchEnd(event){
		if (event.target.className != 'edit-img') {
			var dom = this.getParent(event.target)
			dom.style.background = '#FFF'
		}
	}
	getParent(node){
		if (node.className =='memo'){
			return node;
		}
		return this.getParent(node.parentNode)
	}
}
export default MemoItem