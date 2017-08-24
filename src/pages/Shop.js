import React, {Component} from 'react'
import '../css/shop.css'
import HomeServer from '../Services/HomeServer.js'
let bannerSwiper = null;
let homeScroll = null;
export default class Shop extends Component{
	constructor(){
		super();
		this.state = {
			list:[]
		}
	}
	render(){
		let shopbanner = this.state.list.map((item,index)=>{
			
			if(item.type==2){	
				return (
					<div class='swiper-slide' key={index}><img src={item.imageSrc} /></div>
				)
			}
		})
		let iconlist = this.state.list.map((item,index)=>{
			if(item.type==1){
				return (
						<div class='iconlist' key={index}><img src={item.imageSrc} /><p>{item.name}</p></div>
					)	
			}
		})
		let shoplist = this.state.list.map((item,index)=>{
			if(item.type>2){
				return (
						<div class='shoplist' key={index}><img src={item.imageSrc} /><div class='det-wrp'>{
							item.type == 5?item.products.map((item1,index1)=>{
								return (
									<div key={index1} class='details-pic'>
										<img src={item1.image} />
										<p>{item1.name}</p>
										<span>￥{item1.price}</span>
									</div>
								)
							}):""
						}{item.type == 5?<div class='details-pic'><div>全部</div></div>:""}</div>
						</div>
					)
			}
		})
		return (
			<div class="page" ref='page'>
				<div>
				<div ref="banner" class="swiper-container shop-banner">
					<div class="swiper-wrapper">
						{shopbanner}
					</div>
				</div>
				<div class='icon'>
					{iconlist}
				</div>
				<div class='shop-list'>
					{shoplist}
				</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		HomeServer.getshopList().then((res)=>{
			this.setState({list:res})
			bannerSwiper.update();
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