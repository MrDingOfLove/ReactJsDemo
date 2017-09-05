import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'
class QueryForm extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			'placeholder':'请输入用户编号'
		}
	}
	render(){
		return (
			<div className="queryform">
				<div className="condition">
					<select name="" className="selecte float-left" onChange={this.changeFilter.bind(this)}>
						<option value="byid">按编号查询</option>
						<option value="byadress">按编地址查询</option>
					</select>
					<input className="input float-left" type="text" placeholder={this.state.placeholder} />
					<div className="clear-fix"></div>
				</div>
				<div className="search-btn" onClick={this.query.bind(this)} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>点击查询</div>
			</div>	
		)
	}
	changeFilter(e){
		switch(e.target.value){
			case 'byid':
				this.setState({
					'placeholder':'请输入用户编号'
				})
				break;
			case 'byadress':
				this.setState({
					'placeholder':'请输入地址'
				})
				break;
		}
	}
	query(){
		this.props.superLink.setState({
			title:'查询结果'
		})
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('search-btn')[0];
		submit_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #069b79 100%)'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('search-btn')[0];
		submit_btn.style.background = 'linear-gradient(-180deg, #56DDBE 0%, #00B38A 100%)'
	}
}
export default QueryForm