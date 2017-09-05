import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
class Weather extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="weather">
				<div className="company-name">利民自来水有限公司</div>
				<div className="weather-content"><img src={require('../../../../static/img/weather.jpg')}/></div>
			</div>
		)
	}
}
export default Weather