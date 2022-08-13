
export const initialState = {
	fewDaysForecast: {},
	cityName: '',
	isFetching: false,
	currentDayForecast: '',
}

export const SET_FIVE_DAYS_FORECAST = 'SET_FIVE_DAYS_FORECAST';
export const SET_CITY_NAME = 'SET_CITY_NAME';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const SET_CURRENT_DAY_FORECAST = 'SET_CURRENT_DAY_FORECAST';

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIVE_DAYS_FORECAST:
			return {...state, fewDaysForecast: action.forecast};
		case SET_CITY_NAME:
			return {...state, cityName: action.cityName}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.value}
		case SET_CURRENT_DAY_FORECAST:
			console.log(action.forecast);
			return {...state, currentDayForecast: action.forecast}
		default:
			return state;
	}
}

export const setCityName = (cityName) => ({type: SET_CITY_NAME, cityName});
export const fetchForecastSuccess = (forecast) => ({type: SET_FIVE_DAYS_FORECAST, forecast});
export const toggleIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value});
export const setCurrentDayForecast = (forecast) => ({type: SET_CURRENT_DAY_FORECAST, forecast})

export default weatherReducer;