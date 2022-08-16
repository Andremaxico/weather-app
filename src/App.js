import React, { useReducer, useEffect } from 'react';
import './App.scss';
//components
import DaysForecast from './components/DaysForecast';
import NetworkError from './components/NetworkError/NetworkError';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import ErrorContext from './Context/ErrorContext';
//other
import { geoCoder, geoDecoder } from './helpers/converters';
import withNetworkCheck from './hocs/withNetworkCheck';
import weatherReducer, { initialState, setCityName, setNetworkError } from './Reducers/weather-reducer';
import { getCurrentDayForecast, getFewDaysForecast } from './Thunks/weatherThunks';
import useThunk from './utils/useThunk';

const App = (props) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	const getForecastByCityName = async (cityName) => {
		const coords = await geoDecoder(cityName);
		dispatch(getFewDaysForecast(coords));
	}
	const setDayForecast = (date) => {
		dispatch(getCurrentDayForecast(date, state.fewDaysForecast)); 
	}

	useEffect(() => {
		console.log('mounet');
		if(!state.cityName) {
			console.log('get geo');
			const success = async (position) => {
				const coords = {
					lat: position.coords.latitude, 
					lon: position.coords.longitude
				};
				const cityName = await geoCoder(coords.lat, coords.lon);
				dispatch(getFewDaysForecast(coords));
				dispatch(setCityName(cityName));
				dispatch(setNetworkError(''));
			}
			const error = (error) => {
				dispatch(setNetworkError(error.message));
			}
			navigator.geolocation.getCurrentPosition(success, error, {timeout: 1000});
		} else {
			getForecastByCityName(state.cityName)
		}
	}, [state.cityName]);

	if(state.isFetching) return <Preloader />;
	if(state.networkError) return <NetworkError />
	console.log('rerender');
	return (
		<ErrorContext.Provider value={state.networkError}>
			<div className='App'>
				{(state.isFetching && 
					<Preloader />)
				||(state.networkError &&
					<NetworkError message={'Hi'} />)
				}
				<div className='App__container'>
					<h1 className='App__title'>Weather</h1>
					<Search 
						setCityName={(cityName) => dispatch(setCityName(cityName))}
						setForecast={(cityName) => getForecastByCityName(cityName)}
						cityName={state.cityName}
					/>
					{ state.currentDayForecast && state.fewDaysForecast && 
						<>
							<DaysForecast 
								fewDaysForecast={state.fewDaysForecast} currentWeather={state.currentWeather}
								setDayForecast={setDayForecast} currentDayForecast={state.currentDayForecast}
							/>
							<WeatherInfo currentDayForecast={state.currentDayForecast}/>
						</>
					}
				</div>
			</div>
		</ErrorContext.Provider>
	)
}

export default App;
