import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducers/weatherReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    weatherModule: weatherReducer,
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.myStore = store
