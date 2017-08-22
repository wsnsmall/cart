import {createStore} from 'redux'
let reducer = function(state,action){
    state = {
        city:'深圳',
        user:[{username:"zhansan",psd:"123"}],
        username:''
    }
    if(action.type === 'changecity'){
        state.city = action.val;
        console.log(state.city)
    }
    if(action.type === 'login'){
        state.user.push(action.val)
        console.log(state.user)
    }
    if(action.type === 'success'){
        state.username = action.val
    }
    return state;
}
export default createStore(reducer)