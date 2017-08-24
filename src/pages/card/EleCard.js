import React, {Component} from 'react'

export default class EleCard extends Component{
    render(){
        return (
            <div>
                 <div class='form'>
					<div class="form-group">
						<input type="text" ref='use' class="form-control" placeholder="请输入15位电子卖座卡号" />
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