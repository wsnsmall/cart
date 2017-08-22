import React, {Component} from 'react'
import {HashRouter as Router , NavLink , Route} from 'react-router-dom'
import HomeServer from '../../Services/HomeServer.js'
import Now from './Now.js'
import New from './New.js'
import '../../css/movies.css'
let moviesScroll;
let i=1;
export default class Movies extends Component{
	constructor(){
		super();
		this.state={
			more:'',
			nowmovies:[],
			newmovies:[]
		}
	}
	render(){	
		return (
			<Router>
			<div class="page" ref='page'>
				<div>
				<div class='choosing'>
				<NavLink to='/movies/' exact >正在热映</NavLink>
				<NavLink to='/movies/new' >即将上映</NavLink>
				</div>
				<div class='movies'>
					<Route path='/movies/' exact render={()=>{
						return <Now nowmovies={this.state.nowmovies} />
					}} />
					<Route path='/movies/new' render={()=>{
						return <New newmovies={this.state.newmovies} />
					}} />
				</div>
				<div class='addmore'>{this.state.more}</div>
				</div>
			</div>
			</Router>
		)
	}
	componentWillMount(){
		// 第一次请求正在热映数据
		HomeServer.nowMovies(i).then((res)=>{
			this.setState({nowmovies:this.state.nowmovies.concat(res)})
		})
		HomeServer.newMovies().then((res)=>{
			this.setState({newmovies:this.state.newmovies.concat(res)})
		})
	}
	componentDidMount(){
		
		moviesScroll = new IScroll(this.refs.page,{
			
		})
		moviesScroll.on('scrollStart',()=>{
			moviesScroll.refresh()
			if(moviesScroll.y>moviesScroll.maxScrollY){
				i++
				if(i<=3){
					this.setState({more:'加载更多数据'})
					setTimeout(()=> {
						// 加载更多热映数据
						HomeServer.nowMovies(i).then((res)=>{
							this.setState({nowmovies:this.state.nowmovies.concat(res)})
						})
					}, 1500);
					
				}else{
					this.setState({more:'没有更多数据了'})
				}
			}
		})
	}
}