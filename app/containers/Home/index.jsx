import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

//subpages
import Weather from './subpages/weather'
import Tools from './subpages/Tool'
import Memo from './subpages/Memo'
import Advertisement from './subpages/Advertisement'
import MemoIetm from './subpages/Memo/memoitem'
import LoadMore from '../../components/LoadMore'

import './css/home.less'
//获取数据
import { getMemoListData }from '../../fetch/home'
class Home extends React.Component{
	//类的构造函数
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			data : [],
			hasMore:true,
			isLoadingMore:false,
			nextPage:1
		}
	}
	render(){
		const data = this.state.data
		return (
			<div className='home'>
				<Weather/>
				<Tools/>
				<Advertisement/>
				<Memo/>
				{data.map((item,index)=>{
					return <MemoIetm key={index}/>
				})}
				<LoadMore hasMore={this.state.hasMore} isLoadingMore={this.state.isLoadingMore} loadMore={this.loadMore.bind(this)}/>
			</div>
		)
	}
	componentWillMount(){
		//获取第一页数据
		this.getFirstPageData()
	}
	//获取第一页数据
	getFirstPageData(){
		const result = getMemoListData('北京',0)
		this.resultHandle(result)
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
export default Home