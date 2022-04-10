import { weatherService } from "../../services/weather.service"

export function loadWeather(cityCode) {
    return async (dispatch, getState) => {
        try {
            const weather = await weatherService.query(cityCode)
            dispatch({ type: 'SET_WEATHER', weather })
        } catch (err) {
            console.log(err);
        }
    }
}

export function loadCities() {
    return async (dispatch, getState) => {
        const { searchBy } = getState().weatherModule
        try {
            const cities = await weatherService.getCities(searchBy)
            dispatch({ type: 'SET_CITIES', cities })
        } catch (err) {
            console.log(err);
        }
    }
}

export function setSearchBy(searchBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_SEARCH_BY', searchBy })
    }
}

