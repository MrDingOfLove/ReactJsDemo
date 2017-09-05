import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

//subpages
import FormView from './Form'
import ListView from './List'
import LoadMore from '../../components/LoadMore'
import NoSearch from './NoSearch'

import './css/history.less'
//获取数据
import { getMemoListData }from '../../fetch/home'
class History extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			hasData:false,
			data : [],
			hasMore:false,
			isLoadingMore:false,
			nextPage:1
		}
	}
	render(){
		const data = this.state.data
		return (
			<div className="history">
				<div className="custom-nav">历史记录</div>
				<div className="history-body">
					<FormView showList = {this.getFirstPageData.bind(this)}/>
					<div className='list'>
						{data.map((item,index)=>{
							return <ListView id='S000001' key={index}/>
						})}
					</div>
					{
						this.state.hasData? <LoadMore hasMore={this.state.hasMore} isLoadingMore={this.state.isLoadingMore} loadMore={this.loadMore.bind(this)}/> : <NoSearch/>
					}
					
				</div>
			</div>
		)
	}
	// componentWillMount(){
	// 	//获取第一页数据
	// 	this.getFirstPageData()
	// }
	//获取第一页数据
	getFirstPageData(){
		const result = getMemoListData('北京',0)
		this.resultHandle(result)
		this.setState({
			hasData:true
		})
	}
	//加载更多
	loadMore(){
		// const countPage = this.state.countPage
		//记录加载状态
		this.setState({
			isLoadingMore:true
		})
		const result = getMemoListData('北京',this.state.nextPage)
		this.resultHandle(result)
		this.setState({
			isLoadingMore:false,
			nextPage:this.state.nextPage + 1
		})
	}
	//数据处理
	resultHandle(result){
		result.then((res) => {
			return res.json()
		}).then((json)=>{
			console.log(json)
			this.setState({
				hasMore:json.hasMore,
				data : this.state.data.concat(json.data)
			})
		})
	}
}
export default History