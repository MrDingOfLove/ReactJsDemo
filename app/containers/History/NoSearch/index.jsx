import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import '../css/history.less'
class NoSearch extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
		return (
			<div className='no-search'>请选择条件查询！</div>
		)
	}
}
export default NoSearch