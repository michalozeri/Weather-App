import { loadCities, loadWeather, setSearchBy } from '../store/actions/weatherActions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback, useState } from 'react'
import { WeatherList } from '../cmps/WeatherList'
import { Search } from '../cmps/Search'
import { ToggleFavorite } from '../cmps/ToggleFavorite'
import { ConvertBtn } from '../cmps/ConvertBtn'

export function WeatherApp() {

  const { weather } = useSelector(state => state.weatherModule)
  const { cities } = useSelector(state => state.weatherModule)
  const { currCity } = useSelector(state => state.weatherModule)

  const dispatch = useDispatch()
  useEffect(() => {
  }, [])

  useEffect(() => {
    dispatch(loadWeather(currCity.Key))
  }, [currCity.Key])

  const onChangeSearch = useCallback((searchBy) => {
    dispatch(setSearchBy(searchBy))
    dispatch(loadCities())
  }, [cities])

  if (!weather) return <div>Loading...</div>
  return (
    <section className='weather-app'>
      <Search onChangeSearch={onChangeSearch} cities={cities} />
      <div className='location-title'>
        <div className='location-name'>
          <span className='city'>{currCity.LocalizedName},</span>
          <span className='country'>{currCity.Country.LocalizedName}</span>
        </div>
        <ToggleFavorite cityCode={currCity.Key} />
      </div>
      <ConvertBtn />
      <WeatherList weather={weather} />
    </section>
  )
}