import React, {Component} from 'react'
import {BrowserRouter as Router , NavLink , Route} from 'react-router-dom'

import Home from './pages/Home.js'
import Discover from './pages/Discover.js'
import List from './pages/List.js'
import Me from './pages/Me.js'

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			pageData:[
				{title:'首页',path:'/home',com:Home},
				{title:'发现',path:'/discover',com:Discover},
				{title:'订单',path:'/list',com:List},
				{title:'我的',path:'/me',com:Me},
			]
		}
	}
	render(){
		let pages = this.state.pageData.map((item,index)=>{
			return <Route key={index} path={item.path} component={item.com} />
		})
		let navs = this.state.pageData.map((item,index)=>{
			return <NavLink key={index} to={item.path} >{item.title}</NavLink>
		})
		return (
			<Router>
				<div id='root'>
					{pages}
					<nav>
						{navs}
					</nav>
				</div>
			</Router>
		)
	}
}
