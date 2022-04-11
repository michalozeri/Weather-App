import axios from "axios"
import { storageService } from "./storage.service"

export const weatherService ={
query,
getCities,
}

const KEY = 'searchesDB'
// const API_KEY = 'H629xpUGraN9e4AXVZf0npY6mcvVEeT4' 
const API_KEY = 'OXGZWJJ3iMSbkYY7BwQjwlGHaednFCPn' 
// const API_KEY = 'm9lAGyPN4SxWZAFBBSghB43DxuBB1VDj' 

async function query(cityCode=215854){
    const res= await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${API_KEY}&details=true`)
    return res.data.DailyForecasts
}

async function getCities(searchBy){
    const {search} = searchBy
    var searches = storageService.loadFromStorage(KEY) || {}
    if(searches && searches[search] ){
        console.log('getting data from local storage');
        return Promise.resolve(searches[search])
    } 

    const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${search}`)
    console.log('getting data from server');
    searches[search] = res.data
    storageService.saveToStorage(KEY, searches)
    return res.data
}
   
    
    
