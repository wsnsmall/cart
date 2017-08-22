import React, {Component} from 'react'
import {HashRouter as Router , NavLink , Route} from 'react-router-dom'


import SilderInfo from './Services/SilderInfo.js'
import AppHeader from './views/common/AppHeader.js'
import City from './pages/City.js'
export default class App extends Component{
	constructor(){
		super();
		this.state = {
			hometitle:'卖座电影',
			show:false,
			dis:"none"
		}
	}
	render(){
		
		let data = location.hash == '#/shop'?SilderInfo.shoppage:SilderInfo.homepage
		let pages = SilderInfo.homepage.map((item,index)=>{
			return <Route exact={item.path=='/'?true:false} key={index} path={item.path} component={item.com} />
		})
		let navs = data.map((item,index)=>{
			return <NavLink key={index} to={item.path} onClick={this.showpage.bind(this,item.header)}><span>{item.title}</span><span class='arrowRight'></span></NavLink>
		})
		let navsStyle = {
			transform:this.state.show?'none':'translateX(-100%)'
		}
		let coverStyle = {
			background:this.state.show?'rgba(0, 0, 0, 0.5)':'rgba(0, 0, 0, 0)',
			
		}
		let rootStyle = {
			display:this.state.dis
		}
		return (
			<Router>
				<div>
					<AppHeader title={this.state.hometitle} meunhide={this.meunhide.bind(this)}/>
					{pages}
					<Route path="/city-list" component={City}/>
					<div id='root' style={rootStyle}>
						<span class='cover' style={coverStyle} onClick={this.hide.bind(this)}></span>
						
						
					</div>
					<nav class='navs' style={navsStyle}>
							{navs}
						</nav>	
				</div>
			</Router>
		)
	}
	meunhide(){
		this.setState({show:!this.state.show,dis:this.state.dis=="none"?"block":"none"})
	}
	showpage(val){
		this.setState({show:false,hometitle:val})
		
	}
	hide(){
		this.setState({show:false,dis:this.state.dis=="none"?"block":"none"})
	}
}
