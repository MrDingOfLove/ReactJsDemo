import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'

import MemoItem from './memoitem'
class MemoList extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="memo-detial">
				<NavigationBar title='备忘录列表'/>
				<div className="topblock"></div>
				<MemoItem/>
				<MemoItem/>
				<MemoItem/>
				<MemoItem/>
				<MemoItem/>
				<MemoItem/>
			</div>
		)
	}
}
export default MemoList