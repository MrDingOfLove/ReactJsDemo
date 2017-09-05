import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
import NavigationBar from '../../../../components/NavigationBar'

class EditMemo extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="new-memo">
				<NavigationBar title='查看备忘录详情'/>
				<div className="topblock"></div>
				<div className="memo-content">
					<div className="memo-title">2017年8月8日</div>
					<textarea name="" rows="15">利民小区张三当天不在家，表数据未记录，已通知该用户近期会再上门抄表…</textarea>
					<div className="btn-block">
						<div className="submit-btn" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>确定</div>
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
export default EditMemo