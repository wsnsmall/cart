import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomeServer from '../Services/HomeServer.js'
import store from '../store'
import '../css/citys.css'
let cityScroll;
export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className: '',
			citys:[]
		}
	}
	
	render(){
		let cityslist = this.state.citys.map((item,index)=>{
			if(item.citys){
			return (
				<span key={index} onClick={this.scroll.bind(this,index)}>{item.title}</span>
			)
			}
		})
		let citys = this.state.citys.map((item,index)=>{
			if(item.citys){
			return (
				<div ref={'c'+index} key={index} class='citylist'>
				
				<p>{item.title}</p><div class='cityname'>	
				{item.citys.map((item1,index1)=>{
				return (
					
					<span key={index1} onClick={this.getCityname.bind(this,item1.name)}>{item1.name}</span>
					
				)
			})}
			</div></div>
			)
			}
		})

		return (
			<ReactCSSTransitionGroup
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
	      		transitionLeave={true}
	      		transitionLeaveTimeout={1000}>
			<div id='city' class="page" id='page'>
				<div>
					<div class='citylist'>
						<p>GPS你所在的城市</p>
						<div class='cityname'>
						<span class='gps'>深圳</span>
						</div>
						<p>按字母排序</p>
						<div class='cityname'>	
						{cityslist}
						</div>
					</div>
				{citys}
				</div>
			</div>
			</ReactCSSTransitionGroup>
		)
	}
	getCityname(val){
		store.dispatch({
			type:'changecity',
			val:val
		})
		this.props.history.push('/')
	}
	scroll(index){
		cityScroll.refresh();
		cityScroll.scrollTo(0,-this.refs['c'+index].offsetTop,1000)
	}
	componentWillMount(){
		HomeServer.getCity().then((res)=>{
			this.setState({citys:res})
			
		})
	}
	componentDidMount(){
		cityScroll = new IScroll("#page",{
			
		})
		cityScroll.on('scrollStart',()=>{
			cityScroll.refresh()
		})
	}
}