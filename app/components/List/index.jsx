import React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

class List extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.todos
		return (
			<div>
				<ul style={{marginTop:'10px',fontSize:'20px',lineHeight:'20px'}}>
					{data.map((item,index) => {
						return <li key={index} onClick = {this.clickHandler.bind(this,item.id)}>{item.text}</li>
					})}
				</ul>
			</div>
		)
	}
	clickHandler(id){
		// this.props.deleteFn(id)
		hashHistory.push('/mine/'+id)
	}
}
export default List