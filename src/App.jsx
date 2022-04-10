import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/style/main.scss';
import { AppHeader } from './cmps/AppHeader'
import { WeatherApp } from './pages/WeatherApp';
import { Favorites } from './pages/Favorites'
import { useSelector } from 'react-redux';

export function App() {

    let { isDarkMode } = useSelector(state => state.weatherModule)
    var background = require('./assets/imgs/background2.jpeg')

    return (
        <section style={{backgroundImage: isDarkMode ? "url(" + background + ")" : '', color: isDarkMode ? 'rgb(168, 167, 168)' : '' }} className='app'>
            <Router>
                <div>
                    <AppHeader />
                    <main className='main-container'>
                        <Routes>
                            <Route element={<Favorites />} path='/favorites' />
                            <Route element={<WeatherApp />} path='/' />
                        </Routes>
                    </main>
                </div>
            </Router>
        </section>
    );
}

