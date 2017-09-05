import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import TabBar from '../components/TabBar'
class App extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<div>{ this.props.children }</div>
			</div>
		)
	}
}

export default App