import React, {Component} from 'react'

export default class Carduser extends Component{
    render(){
        return (
            <div>
                <div class='form'>
					<div class="form-group">
						<input type="text" ref='use' class="form-control" placeholder="请输入卡号" />
						<div class="input-bg"></div>
					</div>
					<div class="form-group">
						<input type="password" ref='psd' class="form-control" placeholder="请输入密码" />
						<div class="input-bg"></div>
					</div>
					<div class='btn'>
					<button class="center-block submit">查询</button>
					</div>
				</div>
            </div>
        )
    }
}