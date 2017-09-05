import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
class Input extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value : ''
		}
	}
	render(){
		return (
			<div>
				<input
					style={{width:'calc(100% - 2px)',lineHeight:'40px',fontSize:'40px',border:'1px solid #faebd7'}}
					value={this.state.value}
					onChange={this.changeHandler.bind(this)}
					onKeyUp={this.keyUpHandler.bind(this)}
					
				/>
			</div>
		)
	}
	changeHandler(e){
		this.setState({value: e.target.value})
	}
	keyUpHandler(e){
		const value = this.state.value
		if (e.keyCode === 13 && value.trim()) {
			this.props.submitFn(value)
			this.setState({value:''})
		}
	}
}
export default Input