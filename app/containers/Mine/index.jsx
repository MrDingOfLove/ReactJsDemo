import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import './css/mine.less'
import MenuItem from './menu-item'
class Mine extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="mine">
				<div className="ground">
					<p className="version">当前版本：V1.0</p>
					<div className="user-info">
						<div className="circle1">
							<div className="circle2">
								<div className="header-img"></div>
							</div>
						</div>
						<div className="info-detial">
							<div className="info-label">抄表员：</div><div className="info-fill">张大卫</div>
							<div className="info-label">员工编号：</div><div className="info-fill">100010</div>
							<div className="clear-fix"></div>
						</div>
					</div>
				</div>
				<div className="setting">
					<MenuItem title='修改密码' category='changepassword'/>
				</div>
			</div>
		)
	}
}
export default Mine