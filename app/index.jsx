import React from 'react'
import { render } from 'react-dom'
// import Perf from 'react-addons-perf'//性能检测
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化
//Css
import './static/css/common.less'
//路由
import { hashHistory } from 'react-router'
import RouteMap from './router/RouteMap'

render(
	<RouteMap history={hashHistory}/>,
	document.getElementById('root')
)