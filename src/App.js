import React, { useReducer, useEffect } from 'react';
import './App.scss';
//components
import Days from './components/DaysForecast';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import { geoCoder, geoDecoder } from './helpers/converters';
import weatherReducer, { initialState, setCityName } from './Reducers/weather-reducer';
import { getFewDaysForecast } from './Thunks/weatherThunks';
import useThunk from './utils/useThunk';


const App = (props) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	window.state = state;

	const getForecastByCityName = async (cityName) => {
		const coords = await geoDecoder(cityName);
		dispatch(getFewDaysForecast(coords));
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async function(position) {
			const coords = {
				lat: position.coords.latitude, 
				lon: position.coords.longitude
			};
			const cityName = await geoCoder(coords.lat, coords.lon);
			dispatch(getFewDaysForecast(coords));
			dispatch(setCityName(cityName));
		});
	}, [])

	if(state.isFetching) return <Preloader />;
	return (
		<div className='App'>
			<div className='App__container'>
				<h1 className='App__title'>Weather</h1>
				<Search 
					setCityName={(cityName) => dispatch(setCityName(cityName))}
					setForecast={(cityName) => getForecastByCityName(cityName)}
					cityName={state.cityName}
				/>
				{ state.cityName && 
					<>
						<Days cityName={state.cityName}/>
						<WeatherInfo forecast={state.currentDayForecast}/>
					</>
				}
			</div>
		</div>
	)
}

export default App;
