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
				<div key={index} class='main'>
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
				<div class='main-list'>
					{main}
				</div>
				<div class='user'>{this.state.username}</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		HomeServer.getHomeBanner().then((res)=>{
			this.setState({bannerData:res})
			bannerSwiper.update();
		})
		HomeServer.gethomeMain().then((res)=>{
			this.setState({homeMain:res})
		})
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