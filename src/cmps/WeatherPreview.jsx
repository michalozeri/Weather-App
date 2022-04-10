import React from 'react';
import Moment from 'react-moment';
import { useSelector} from 'react-redux'

export function WeatherPreview({ dailyWeather }) {

    let { isConverted } = useSelector(state => state.weatherModule)

    return (
        <section className="weather-preview">
            <div className='preview-container'>
                <div className='date-container'>
                    <div className='date'>
                        <div className='month'>
                            <Moment date={dailyWeather.Date} format="ddd">{dailyWeather.Date} </Moment>
                        </div>
                        <Moment date={dailyWeather.Date} format="DD/MM"> {dailyWeather.Date}</Moment>
                    </div>
                    <img src={require(`../assets/imgs/${dailyWeather.Day.Icon}.png`)} alt='' />
                </div>
                <div className='temperature'>
                    {isConverted ? <span className='big-font'>{Math.round((dailyWeather.Temperature.Maximum.Value - 32) / 1.8)}&#8451;</span> :
                        <span className='big-font'>{Math.round(dailyWeather.Temperature.Maximum.Value)}&#8457;</span>}
                    {isConverted ? <span>/{Math.round((dailyWeather.Temperature.Minimum.Value - 32) / 1.8)}&#8451;</span> :
                        <span>/{Math.round(dailyWeather.Temperature.Minimum.Value)}&#8457;</span>}
                </div>
            </div>
            <p className='text'>{dailyWeather.Day.IconPhrase}</p>
            <p className='drop'><img src={require(`../assets/imgs/water.png`)} alt='' />{dailyWeather.Day.RainProbability}%</p>
        </section>
    )
}
