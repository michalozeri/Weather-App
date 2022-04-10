import { WeatherPreview } from '../cmps/WeatherPreview'

export function WeatherList({ weather }) {

    return (
        <section className="weather-list">
            <div className='list-container'>
                {weather.map((dailyWeather, idx) =>
                    <WeatherPreview dailyWeather={dailyWeather} key={idx} />
                )}
            </div>
        </section>
    )
}