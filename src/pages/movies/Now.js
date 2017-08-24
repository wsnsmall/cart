import React, {Component} from 'react'

export default class Now extends Component{
	render(){
		let movies = this.props.nowmovies.map((item,index)=>{
			return (
				<li key={index} onClick={this.details.bind(this,item.id)}>
					<div class='mov-pic'><img src={item.poster.thumbnail} /></div>
					<div class='mov-info'>
						<p class='mov-name'>{item.name}</p>
						<p class='mov-intro'>{item.intro}</p>
						<p class='watchCount'><span>家影院正在热映</span><span>{item.watchCount}人购票</span></p>
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
	details(id){
		window.location.href = 'http://localhost:8000/#/movies/details/' + id;
	}
}