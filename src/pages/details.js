import React, {Component} from 'react'
import '../css/details.css'
import HomeServer from '../Services/HomeServer.js'
export default class Shop extends Component{
	constructor(){
		super();
		this.state = {
			details:{}
		}
	}
	render(){
		let i = this.state.details;
		let time = i.premiereAt;
		var date = new Date(time);
		let day = date.getMonth()+1 +"月" +date.getDate()+"日";
		
		return (
			<div class="page">
				<div>
					<div class='detail-img'><img src={i.pic} /></div>
					<div class='detail'>
					<div class='intro'>影片简介</div>
					<div class='director'>导演：{i.director}</div>
					<div class='actors'>主演：{i.actors?i.actors.map((item,index)=>{
						return (
							<span key={index}>{item.name}</span>
						)
						}):''}</div>
					<div class = 'lan'>地区语言：{i.nation}({i.language})</div>
					<div class='cate'>类型：{i.category}</div>
					<div class='day'>上映时间：{day}</div>
					</div>
					<div class ='synopsis'>{i.synopsis}</div>
					<div class='btn'>
					<button class="cpn-primary-button">立即购票</button>
					</div>
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		let id = this.props.location.pathname.slice(16);
		HomeServer.getmoviesDetails(id).then((res)=>{
			this.setState({details:res})
		})
	}
}