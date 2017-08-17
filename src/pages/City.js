import React, {Component} from 'react'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className: '',
			history
		}
	}
	
	render(){
		return (
			<div class="page">
				城市
			</div>
		)
	}

}