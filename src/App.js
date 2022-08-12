import React, { useReducer } from 'react';
import './App.scss';
//components
import Days from './components/DaysForecast';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import weatherReducer, { initialState, setCityName } from './Reducers/weather-reducer';
import { getFiveDaysForecast } from './Thunks/weatherThunks';
import useThunk from './utils/useThunk';


const App = (props) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);
	console.log(state);
	return (
		<div className='App'>
			<div className='App__container'>
				<h1 className='App__title'>Weather</h1>
				<Search 
					setCityName={(cityName) => dispatch(setCityName(cityName))}
					setForecast={(cityName) => dispatch(getFiveDaysForecast(cityName))}
				/>
				<Days cityName={state.cityName}/>
				<WeatherInfo />
			</div>
		</div>
	)
}

export default App;
