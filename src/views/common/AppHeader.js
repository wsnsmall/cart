import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class AppHeader extends Component{
	
	
	render(){
		return (
			<div id='head'>
					<div class='head-meun'>
						<span class='iconfont icon-menu' onClick={this.showbar.bind(this)}></span>
						<span class='head-title'>{this.props.title}</span>
					</div>
					<div class='head-me'>
						<Link to="/city-list"><span>深圳 <i class='iconfont icon-arrow-down'></i></span></Link>
						<span class='iconfont icon-person'></span>
					</div>
				</div>
		)
	}
	showbar(){
		this.props.meunhide()
	}

}
