import React, {Component} from 'react'
import HomeServer from '../Services/HomeServer.js'
import '../css/cinema.css'
let movieScroll;
export default class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			cinema:[]
		}
	}
	render(){
		console.log(this.state.cinema)
		let area = this.state.cinema.map((item,index)=>{
			let style = {
				display:item.show
			}
			return (
				<li key={index}>
					<p class='cinema-area' onClick={this.show.bind(this,index)}>{item.title}</p>
					
					<div style={style}>
					{item.info.map((item1,index1)=>{
						return (
							<div key={index1} class='cinema-det'>
							<p class='tui'>退</p>
							<p class='zuo'>座</p>	
							<div class='cinemaname'><p>{item1.name}</p></div><p class='actives'>
							{item1.labels.map((item2,index2)=>{
								return <span key={index2}>{item2.name}</span>
							})}</p>
							<p class='address'>{item1.address}</p>
							</div>
						)
					})}
					</div>
				</li>
			)
		})
		return (
			<div class="page" ref='page'>
				<div>
				<ul class='cinema-list'>
					{area}
				</ul>
				</div>
			</div>
		)
	}
	show(index){
		let arr = this.state.cinema;
		arr.map((item,i)=>{
			if(index == i){
				if(item.show == "block"){
					item.show = "none"
				}else{
					item.show = "block"
				}
			}
		})
		this.setState({cinema:arr})
	}
	componentWillMount(){
		if(window.sessionStorage.getItem('cinema')){
			let cinema = JSON.parse(window.sessionStorage.getItem('cinema'))
			this.setState({cinema:cinema})
		}else{
			HomeServer.cinema().then((res)=>{
				this.setState({cinema:res})
			})
		}
		
	}
	componentDidMount(){
		
		movieScroll = new IScroll(this.refs.page,{
			
		})
		movieScroll.on('scrollStart',()=>{
			movieScroll.refresh()
		})
	}
}