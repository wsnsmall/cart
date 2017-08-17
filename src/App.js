import React, {Component} from 'react'
import {BrowserRouter as Router , NavLink , Route} from 'react-router-dom'


import SilderInfo from './Services/SilderInfo.js'
import AppHeader from './views/common/AppHeader.js'
import City from './pages/City.js'
export default class App extends Component{
	constructor(){
		super();
		this.state = {
			hometitle:'卖座电影',
			show:false
		}
	}
	render(){
		let pages = SilderInfo.homepage.map((item,index)=>{
			return <Route key={index} path={item.path} component={item.com} />
		})
		let navs = SilderInfo.homepage.map((item,index)=>{
			return <NavLink key={index} to={item.path} onClick={this.hide.bind(this)}><span>{item.title}</span><span class='arrowRight'></span></NavLink>
		})
		let navsStyle = {
			transform:this.state.show?'none':'translateX(-100%)'
		}
		let coverStyle = {
			background:this.state.show?'rgba(0, 0, 0, 0.5)':'rgba(0, 0, 0, 0)'
		}
		return (
			<Router>
				<div>
					<AppHeader title={this.state.hometitle} meunhide={this.meunhide.bind(this)}/>
					{pages}
					<Route path="/city-list" component={City}/>
					<div id='root'>
						<span class='cover' style={coverStyle} onClick={this.hide.bind(this)}></span>
						<nav class='navs' style={navsStyle}>
							{navs}
						</nav>	
						
					</div>
					
				</div>
			</Router>
		)
	}
	meunhide(){
		this.setState({show:!this.state.show})
		console.log(this.state.show)
	}
	hide(){
		this.setState({show:false})
	}
}
