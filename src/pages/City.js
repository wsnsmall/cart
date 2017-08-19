import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomeServer from '../Services/HomeServer.js'
export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className: '',
			citys:[]
		}
	}
	
	render(){
		let arr = [];
		for(var i=0;i<26;i++){
			let obj = {};
			let char =String.fromCharCode(i+65);
			let arr1 = [];
			obj[char] = [];
			let citys = this.state.citys.map((item,index)=>{		
				if(char == item.pinyin[0]){
					arr1.push(item)
					obj[char] = arr1;
				}
			})
			arr.push(obj)
		}	
		console.log(arr)
		let citys = arr.map((item,index)=>{
			return (
				<div key={index}>
					{item.id}
				</div>
			)
		})
		return (
			<ReactCSSTransitionGroup
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
	      		transitionLeave={true}
	      		transitionLeaveTimeout={1000}>
			<div id='city' class="page">
				
			</div>
			</ReactCSSTransitionGroup>
		)
	}
	componentWillMount(){
		HomeServer.getCity().then((res)=>{
			this.setState({citys:res})
			
		})
	}
}