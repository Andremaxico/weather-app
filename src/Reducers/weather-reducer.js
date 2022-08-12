
export const initialState = {
	fiveDaysForecast: {},
	cityName: '',
}

export const SET_FIVE_DAYS_FORECAST = 'SET_FIVE_DAYS_FORECAST';
export const SET_CITY_NAME = 'SET_CITY_NAME';

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIVE_DAYS_FORECAST:
			
			return {...state, fiveDaysForecast: action.forecast};
		case SET_CITY_NAME:
			return {...state, cityName: action.cityName}
		default:
			return state;
	}
}

export const setCityName = (cityName) => ({type: SET_CITY_NAME, cityName});
export const fetchForecastSuccess = (forecast) => ({type: SET_FIVE_DAYS_FORECAST, forecast});

export default weatherReducer;