import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'//性能优化

import './loadmore.less'
class LoadMore extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
		return (
			<div className='load-more' ref="loadmore">
				{this.props.hasMore ? <p>上滑加载更多</p> : <p>没有啦</p>}
			</div>
		)
	}
	componentDidMount() {
		//上拉加载
		const loadMoreFn = this.props.loadMore
		const loadmore = this.refs.loadmore
		let timeoutId
		function callback() {
			//loadmore 距内容最上方的高度
            const top = loadmore.getBoundingClientRect().top
            //窗口高度
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 loadmore 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore||!this.props.hasMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
	}
}
export default LoadMore