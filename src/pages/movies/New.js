import React, {Component} from 'react'

export default class New extends Component{
	
	render(){
		
		let movies = this.props.newmovies.map((item,index)=>{
			let time = item.premiereAt;
			var date = new Date(time);
			let day = date.getMonth()+1 +"月" +date.getDate()+"日";
			let week = date.getDay();
			if(week == 0){
				week = "星期天"
			}else if(week == 1){
				week = "星期一"
			}else if(week == 2){
				week = "星期二"
			}else if(week == 3){
				week = "星期三"
			}else if(week == 4){
				week = "星期四"
			}else if(week == 5){
				week = "星期五"
			}else if(week == 6){
				week = "星期六"
			}
			return (
				<li key={index} onClick={this.details.bind(this,item.id)}>
					<div class='mov-pic'><img src={item.poster.thumbnail} /></div>
					<div class='mov-info'>
						<p class='mov-name'>{item.name}</p>
						<p class='mov-intro'>{item.intro}</p>
						<p class='watchCount'><span>{day}上映</span><span>{week}</span></p>
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