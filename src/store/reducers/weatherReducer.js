const INITIAL_STATE = {
   
    weather: [],
    searchBy: null,
    cities: [],
    isConverted:false,
    isDarkMode:false,
    favorites:[],
    favoritesWeather:[],
    currCity: {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
        }
        },
}

export function weatherReducer(state = INITIAL_STATE, action) {

    
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather: [...action.weather]
            };
            case 'SET_CITIES':
                return {
                    ...state,
                    cities: [...action.cities]
                };
            case 'SET_CITY':
                return {
                    ...state,
                    currCity: {...action.city}
                };
                
            case 'ADD_FAVORITE':
                return {
                ...state,
                favorites: [...state.favorites, action.newObj]
            }

            case 'REMOVE_FAVORITE':
                return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.Key !== action.newObj.Key)
            }
            case 'SET_SEARCH_BY':
                return {
                    ...state,
                    searchBy: {...action.searchBy}
                }
            case 'SET_IS_CONVERTED':
                    return {
                    ...state,
                    isConverted: action.isConverted
                    };
            case 'SET_IS_DARK_MODE':
                    return {
                    ...state,
                    isDarkMode: action.isDarkMode
                    };        
                
                default:
            return state;
    }

}