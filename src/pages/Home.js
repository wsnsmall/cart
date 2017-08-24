import React, {Component} from 'react'
import HomeServer from '../Services/HomeServer.js'
import store from '../store'
import '../css/home.css'
let bannerSwiper = null;
let homeScroll = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[],
			homeMain:{},
			newMovies:[],
			username:store.getState().username
		}
	}
	render(){
		let pic = this.state.bannerData.length>0?this.state.bannerData.map((item,index)=>{
					return (
						
						<div key={index} class="swiper-slide">
							<img src={item.imageUrl}/>
						</div>
					)
				}):"";
		let main = 	this.state.homeMain.films?this.state.homeMain.films.map((item,index)=>{
			return (
				<div key={index} class='main' onClick={this.details.bind(this,item.id)}>
					<div class='main-con'>
					<img src={item.cover.origin}/>
					<p class='moviename'>{item.name}</p>
					<p class='movieintro'>{item.intro}</p>
					</div>
				</div>
			)
		}):'';
		let mainnew = this.state.newMovies?this.state.newMovies.map((item,index)=>{
			return (
				<div key={index} class='main' onClick={this.details.bind(this,item.id)}>
					<div class='main-con'>
					<img src={item.cover.origin}/>
					<p class='moviename'>{item.name}</p>
					<p class='movieintro'>{item.intro}</p>
					</div>
				</div>
			)
		}):'';
		return (
			<div class="page" ref='page'>
				<div>
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
						{pic}
					</div>
				</div>
				<div class="dividing-line">
				<div class="upcoming">正在热映</div></div>
				<div class='main-list'>
					{main}
				</div>
				<div class='more-button' onClick={this.more.bind(this)}>更多热映电影</div>
				<div class="dividing-line"><div class="upcoming">即将上映</div></div>
				<div class='main-list'>
					{mainnew}
				</div>
				<div class='more-button' onClick={this.morenew.bind(this)}>更多即将上映电影</div>
				</div>
			</div>
		)
	}
	details(id){
		this.props.history.push('/movies/details/'+id)
	}
	more(){
		window.location.href = 'http://localhost:8000/#/movies/'
	}
	morenew(){
		window.location.href = 'http://localhost:8000/#/movies/new/'
	}
	componentWillMount(){
		HomeServer.newMovies().then((res)=>{
			this.setState({newMovies:res})
		})
		if(window.sessionStorage.getItem('banner')){
			let bannerData = JSON.parse(window.sessionStorage.getItem('banner'))
			this.setState({bannerData:bannerData})
		}else{
			HomeServer.getHomeBanner().then((res)=>{
				this.setState({bannerData:res})
				bannerSwiper.update();
			})
		}
		if(window.sessionStorage.getItem('homemain')){
			let homeMain = JSON.parse(window.sessionStorage.getItem('homemain'))
			this.setState({homeMain:homeMain})
		}else{
			HomeServer.gethomeMain().then((res)=>{
				this.setState({homeMain:res})
			})
			
		}
	}
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{
		})
		homeScroll = new IScroll(this.refs.page,{
			
		})
		homeScroll.on('scrollStart',()=>{
			homeScroll.refresh()
		})
	}
}