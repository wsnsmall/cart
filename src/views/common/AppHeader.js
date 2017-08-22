import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import store from '../../store'
let changecitys;
export default class AppHeader extends Component{
	constructor(){
		super();
		this.state = store.getState()
	}
	
	render(){
		return (
			<div id='head'>
					<div class='head-meun'>
						<span class='iconfont icon-menu' onClick={this.showbar.bind(this)}></span>
						<span class='head-title'>{this.props.title}</span>
					</div>
					<div class='head-me'>
						<Link to="/city-list"><span>{this.state.city} <i class='iconfont icon-arrow-down'></i></span></Link>
						<Link to="/me"><span class='iconfont icon-person'></span></Link>
					</div>
				</div>
		)
	}
	showbar(){
		this.props.meunhide()
	}
	componentWillMount(){
		changecitys = store.subscribe(()=>{
			this.setState({city:store.getState().city})
		})
	}
	componentWillUnmount(){
		changecitys()
	}
}
