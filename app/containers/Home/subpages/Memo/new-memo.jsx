import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'

class NewMemo extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="new-memo">
				<NavigationBar title='新建备忘录'/>
				<div className="topblock"></div>
				<div className="memo-content">
					<div className="memo-title">2017年9月9日</div>
					<textarea name="" rows="15">抄表明细抄表明细抄表明细抄表明细抄表明细</textarea>
					<div className="btn-block">
						<div className="submit-btn" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>添加</div>
					</div> 
				</div>
			</div>
		)
	}
	touchStart(){
		var submit_btn = document.getElementsByClassName('submit-btn')[0];
		submit_btn.style.background = '#2398bf'
	}
	touchEnd(){
		var submit_btn = document.getElementsByClassName('submit-btn')[0];
		submit_btn.style.background = '#29A6CF'
	}
}
export default NewMemo