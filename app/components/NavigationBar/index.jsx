import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import './navigationbar.less'
class NavigationBar extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className='navigaionbar'>
				<div className="nav">
					<img onClick={this.backHandler} src={require('../../static/img/back.jpg')} className="float-left"/>
					<span>{this.props.title}</span>
				</div>
			</div>	
		)
	}
	backHandler(){
		window.history.back()
	}
}
export default NavigationBar