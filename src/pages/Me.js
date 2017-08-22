import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from '../store'
import '../css/me.css'
let adduser;
export default class Me extends Component{
	constructor(){
		super();
		this.state = {
			user:store.getState().user
		}
	}
	render(){
		return (
			
			<div class="page">
				<div class='form'>
					<div class="form-group">
						<input type="text" ref='use' class="form-control" placeholder="输入手机号/邮箱" />
						<div class="input-bg"></div>
					</div>
					<div class="form-group">
						<input type="password" ref='psd' class="form-control" placeholder="输入密码/验证码" />
						<div class="input-bg"></div>
					</div>
					<div class='btn'>
					<button class="center-block submit" onClick={this.register.bind(this)}>注册</button>
					<button class="center-block submit" onClick={this.login.bind(this)}>登录</button>
					</div>
				</div>
			</div>
			
		)
	}
	register(){
		store.dispatch({
			type:'login',
			val:{username:this.refs.use.value,psd:this.refs.psd.value}
		})
	}
	login(){
		let username = this.refs.use.value;
		let psd = this.refs.psd.value;
		this.state.user.map((item)=>{
			if(item.username == username && item.psd == psd){
				store.dispatch({
					type:'success',
					val:this.refs.use.value
				})
				this.props.history.push('/')
				
			}else{
				alert('登录失败')
			}
		})
	}
	componentWillMount(){
		adduser = store.subscribe(()=>{
			this.setState({user:store.getState().user})
		})
	}
	componentWillUnmount(){
		adduser()
	}
}