import React from 'react'
import { Router,Route,IndexRoute } from 'react-router'

import App from '../containers'
//Login
import Login from '../containers/Login'

// Home
import Home from '../containers/Home'
import Meter from '../containers/Home/subpages/Meter'
import Repairs from '../containers/Home/subpages/Repairs'
import Report from '../containers/Home/subpages/Report'
import MeterDetial from '../containers/Home/subpages/Meter/meter-detial'
import RepairsDetial from '../containers/Home/subpages/Repairs/repairs-detial'
import ReportDetial from '../containers/Home/subpages/Report/report-detial'
import MemoList from '../containers/Home/subpages/Memo/memo-list'
import NewMemo from '../containers/Home/subpages/Memo/new-memo'
import EditMemo from '../containers/Home/subpages/Memo/edit-memo'
import MemoDetial from '../containers/Home/subpages/Memo/memodetial'

// History
import History from '../containers/History'
import HistoryDetial from '../containers/History/HistoryDetial'

// Mine
import Mine from '../containers/Mine'
import ChangePwd from '../containers/Mine/change-password'

import Todo from '../containers/Todo'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component{
	render(){
		return(
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					// Home
					<IndexRoute component={Login}/>
						<Route path='home' component={Home}/>//抄表管理
						<Route path='meter' component={Meter}/>//抄表管理
							<Route path='meter-detial/:id' component={MeterDetial}/>//抄表详情
						<Route path='repairs' component={Repairs}/>//报修管理
							<Route path='repairs-detial/:id' component={RepairsDetial}/>//报修详情 
						<Route path='report' component={Report}/>//举报管理
							<Route path='report-detial/:id' component={ReportDetial}/>//举报详情
						//备忘录
						<Route path='memo-list' component={MemoList}/>//备忘录列表
						<Route path='memo-detial/:id' component={MemoDetial}/>//备忘录详情
						<Route path='new-memo' component={NewMemo}/>//新增备忘录
						<Route path='memo-edit/:id' component={EditMemo}/>//编辑备忘录
					// History
					<Route path='history' component={History}/>
						<Route path='history-detial/:id' component={HistoryDetial}/>//历史记录详情
					// Mine
					<Route path='mine' component={Mine}/>
						<Route path='change-pwd' component={ChangePwd}/>
					<Route path='todo' component={Todo}/>
					<Route path='*' component={NotFound}/>
				</Route>
			</Router>
		)
	}

}
export default RouteMap