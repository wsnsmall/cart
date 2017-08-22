import React, {Component} from 'react'

export default class New extends Component{
	
	render(){
		let movies = this.props.newmovies.map((item,index)=>{
			return (
				<li key={index}>
					<div class='mov-pic'><img src={item.poster.thumbnail} /></div>
					<div class='mov-info'>
						<p class='mov-name'>{item.name}</p>
						<p class='mov-intro'>{item.intro}</p>
						<p class='grade'>{item.grade}</p>
					</div>
				</li>
			)
		})
		return (
			<div class="movies-page">
				<ul class='movies-list'>
					{movies}
				</ul>
			</div>
		)
	}
	
}