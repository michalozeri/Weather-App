import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToggleDarkMode } from './TogglelDarkMode'


export function AppHeader() {

    let { isDarkMode } = useSelector(state => state.weatherModule)

    return (
        <header className="app-header">
            <section className="container">
                <h1>Weather App <img src={require('../assets/imgs/favicon.ico')} alt="" /></h1>
                <nav>
                    <NavLink style={{backgroundImage: isDarkMode? "linear-gradient(to right,#0ab0f1,#e709ca 50%,rgb(168, 167, 168) 50%":
                     "linear-gradient(to right,#0ab0f1,#e709ca 50%,rgb(51, 17, 51) 50%"}} activeClassName='active' to='/'>Main</NavLink>
                    <NavLink style={{backgroundImage: isDarkMode? "linear-gradient(to right,#0ab0f1,#e709ca 50%,rgb(168, 167, 168) 50%":
                     "linear-gradient(to right,#0ab0f1,#e709ca 50%,rgb(51, 17, 51) 50%"}} className={isDarkMode? 'dark': 'light'} activeClassName='active' to='/favorites'>Favorite</NavLink>
                    <ToggleDarkMode />
                </nav>
            </section>
        </header>
    )
}