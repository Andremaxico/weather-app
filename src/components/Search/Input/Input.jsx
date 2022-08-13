import React, {useState} from 'react';
import './Input.scss';

const Input = ({setCityName, setForecast, children, cityName}) => {
	const [inputValue, setInputValue] = useState(cityName);
	return (
		<div className='Input'>
			<input 
				className='Input__field' type='text' onBlur={() => setCityName(inputValue)}
				onChange={(e) => setInputValue(e.target.value)} value={inputValue}
			/>
			<button className='Input__btn' onClick={() => setForecast(inputValue)}>{children}</button>
		</div>
	)
}

export default Input;
