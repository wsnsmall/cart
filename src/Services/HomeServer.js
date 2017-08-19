import axios from 'axios'
import API from '../api'
// 请求轮播图列表
function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
           resolve(res.data.data.billboards)
        })
    })
}
// 请求主页数据
function gethomeMain(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeMainApi}?__t=${new Date().getTime()}&page=1&count=5`)
        .then((res)=>{
            resolve(res.data.data)
        })
    })
}
// 请求城市列表
function getCity(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.CityApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            resolve(res.data.data.cities)
        })
    })
}
export default {
    getHomeBanner,
    gethomeMain,
    getCity
}