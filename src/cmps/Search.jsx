import { loadWeather } from '../store/actions/weatherActions'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'


export function Search(props) {

    const dispatch = useDispatch()
    const [searchBy, handleChange] = useForm({
        search: '',
    }, props.onChangeSearch)

    function setCity(city) {
        dispatch({ type: 'SET_CITY', city })
        dispatch(loadWeather(city.Key))
        searchBy.search = ''
    }

    const { search } = searchBy
    return (
        <section className="search">
            <div className="search-container">
                <input autoComplete='off' onChange={handleChange} value={search} type="text" name="search" id="search" placeholder='Search' />
                <img src={require(`../assets/imgs/search-interface-symbol.png`)} alt='' />
            </div>
            {search.length > 0 && <div className='options'>
                {props.cities.map(city => {
                    return <div className='option' key={city.Key} onClick={() => setCity(city)}><span ><b>{city.LocalizedName}</b>, {city.Country.LocalizedName}</span></div>
                })}
            </div>}
        </section>
    )
}