import React, {Component} from 'react'
import {HashRouter as Router , NavLink , Route} from 'react-router-dom'
import Carduser from './Carduser.js'
import EleCard from './EleCard.js'
export default class Card extends Component{
	
	render(){
		return (
			<Router>
			<div class="page" ref='page'>
				<div>
				<div class='choosing'>
				<NavLink to='/card/' exact >卖座卡</NavLink>
				<NavLink to='/card/elecard' >电子卖座卡</NavLink>
				</div>
				<div class='movies'>
					<Route path='/card/' exact component={Carduser} />
				
					<Route path='/card/elecard' component={EleCard}/>
					
				</div>
				</div>
			</div>
			</Router>
		)
	}
	
}