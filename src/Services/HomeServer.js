import axios from 'axios'
import API from '../api'
// 请求轮播图列表
function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            if(res.data.data.billboards){
             resolve(res.data.data.billboards)
           }else{
              getHomeBanner() 
           }
        })
    })
}
// 请求主页数据
function gethomeMain(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeMainApi}?__t=${new Date().getTime()}&page=1&count=7`)
        .then((res)=>{
            if(res.data.data){
            resolve(res.data.data)
            }else{
                gethomeMain()
            }
        })
    })
}
// 请求城市列表
function getCity(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.CityApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            let arr = [];
            for(var i=0;i<26;i++){
                let obj = {};
                let char =String.fromCharCode(i+65);
                let arr1 = [];
                obj.title = char;
                let citys = res.data.data.cities.map((item,index)=>{		
                    if(char == item.pinyin[0]){
                        arr1.push(item)
                        obj.citys = arr1;
                    }
                })
                arr.push(obj)
            }
            resolve(arr)
        })
    })
}

// 请求影片正在热映
function nowMovies(i){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.nowMoviesApi}?&page=${i}&count=7`).then((res)=>{
            if(res.data.data.films){
                resolve(res.data.data.films)
            }else{
                nowMovies()
            }
        })
    })
}
// 请求影片即将上映
function newMovies(){
    return new Promise((resolve,reject)=>{
         axios.get(`${API.newMoviesApi}?&page=1&count=7`).then((res)=>{
            if(res.data.data.films){
                resolve(res.data.data.films)
            }else{
                newMovies()
            }
         })
    })
}

export default {
    getHomeBanner,
    gethomeMain,
    getCity,
    nowMovies,
    newMovies
}