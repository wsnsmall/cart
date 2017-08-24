import axios from 'axios'
import API from '../api'
// 请求轮播图列表
function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            if(res.data.data.billboards){  
                window.sessionStorage.setItem('banner',JSON.stringify(res.data.data.billboards))
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
                window.sessionStorage.setItem('homemain',JSON.stringify(res.data.data))
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
            window.sessionStorage.setItem('city',JSON.stringify(arr))
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

// 请求影院
function cinema(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.cinemaApi}?__t=${new Date().getTime()}`).then((res)=>{
            if(res.data.data.cinemas){
            let arr = res.data.data.cinemas
            let arr1 = [];
            let newarr = [];   
            arr.map((item)=>{    
                if(arr1.indexOf(item.district.name) == -1){
                    arr1.push(item.district.name)
                }
           })
            console.log(arr1)
            arr1.map((item)=>{
            let obj = {};
            obj.info = [];
                arr.map((item1)=>{
                    if(item == item1.district.name){
                        obj.title = item
                        obj.info.push(item1)
                        obj.show = "none"
                }
                }) 
            newarr.push(obj)   
            })
            window.sessionStorage.setItem('cinema',JSON.stringify(newarr))
            resolve(newarr)
            }else{
                cinema()
            }
        })
    })
}
// 请求电影详情
function getmoviesDetails(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.moviesDetailsApi}/${id}?__t=${new Date().getTime()}`).then((res)=>{
            if(res.data.data.film){
                res.data.data.film.pic = res.data.data.film.cover.origin
                resolve(res.data.data.film)
            }else{
                console.log("请求失败")
            }
        })
    })
}

// 请求商城数据
// 请求首页分类
function getshopList(){
    return new Promise((resolve,reject)=>{
        console.log(`${API.shoplistApi}`)
        axios.get(`${API.shoplistApi}`).then((res)=>{
            if(res.data.data){
                resolve(res.data.data)
            }else{
                getshopList()
            }
            
        })
    })
}



export default {
    getHomeBanner,
    gethomeMain,
    getCity,
    nowMovies,
    newMovies,
    cinema,
    getmoviesDetails,
    getshopList
}