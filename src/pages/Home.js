import React, {Component} from 'react'
import HomeServer from '../Services/HomeServer.js'
import '../css/home.css'
let bannerSwiper = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[],
			homeMain:{}
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
					<img src={item.cover.origin}/>
					<p>{item.name}</p>
					<p>{item.intro}</p>
				</div>
			)
		}):'';	
		return (
			<div class="page">
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
						{pic}
					</div>
				</div>
				<div class='main-list'>
					{main}
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
	}
}