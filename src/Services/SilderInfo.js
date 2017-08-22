import Home from '../pages/Home.js'
import Movies from '../pages/movies/Movies.js'
import Cinema from '../pages/Cinema.js'
import Shop from '../pages/Shop.js'
import Me from '../pages/Me.js'
import Card from '../pages/Card.js'
export default {
	homepage:[
		{title:'首页', header: '卖座电影',path:'/',com:Home},
		{title:'影片',header: '卖座电影',path:'/movies',com:Movies},
		{title:'影院',header: '全部影院',path:'/cinema',com:Cinema},
		{title:'商城',header: '卖座商城',path:'/shop',com:Shop},
		{title:'我的',header: '登录',path:'/me',com:Me},
		{title:'卖座卡',header: '查询/绑定/激活卖座卡',path:'/cart',com:Card}
	],
	shoppage:[
		{title: '首页', header: '卖座商城', path: '/shop'},
		{title: '影票', header: '卖座电影', path: '/'},
		{title: '我的', header: '登录', path: '/me'},
		{title: '卖座卡', header: '查询/绑定/激活卖座卡', path: '/card'}
	]
}
