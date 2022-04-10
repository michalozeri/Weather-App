import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadWeather } from '../store/actions/weatherActions';
import { useNavigate } from 'react-router-dom';

export function Favorites(props) {

    const { favorites } = useSelector(state => state.weatherModule)
    let { isConverted } = useSelector(state => state.weatherModule)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
    }, [favorites])

    async function setWeather(city) {
        await dispatch(loadWeather(city.Key))
        dispatch({ type: 'SET_CITY', city })
        navigate('/');
    }

    function removeFavorite(e, newObj) {
        e.stopPropagation();
        dispatch({ type: 'REMOVE_FAVORITE', newObj })
    }

    if (!favorites.length) return <div className='favorites'><h1>No Favorites To Show</h1></div>
    return (
        <section className="favorites">
            <div className='favorites-container'>
                {favorites.map(city => {
                    return <div className='favorite-city' key={city.Key} onClick={() => setWeather(city)}>
                        <button onClick={(ev) => removeFavorite(ev, city)}><img src={require(`../assets/imgs/close.png`)} alt="" /></button>
                        <h1>{city.LocalizedName}</h1>
                        <h4>{city.Country.LocalizedName}</h4>
                        <div className='weather'>
                            <img src={require(`../assets/imgs/${city.currWeather.Day.Icon}.png`)} alt='' />
                            <div className='temp'>
                                {isConverted ? <span className='big-font'>{Math.round((city.currWeather.Temperature.Maximum.Value - 32) / 1.8)}&#8451;</span> :
                                    <span className='big-font'>{Math.round(city.currWeather.Temperature.Maximum.Value)}&#8457;</span>}
                                {isConverted ? <span>/{Math.round((city.currWeather.Temperature.Minimum.Value - 32) / 1.8)}&#8451;</span> :
                                    <span>/{Math.round(city.currWeather.Temperature.Minimum.Value)}&#8457;</span>}
                            </div>
                        </div>
                    </div>
                })}
            </div>


        </section>
    )
}