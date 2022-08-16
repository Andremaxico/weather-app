import React, {useState} from 'react';
import './Input.scss';

const Input = ({setCityName, setForecast, children, cityName}) => {
	const [inputValue, setInputValue] = useState(cityName);
	const formSubmit = (e) => {
		setForecast(inputValue);
		e.preventDefault();
	}
	return (
		<form className='Input' onSubmit={formSubmit}>
			<input  
				className='Input__field' type='text' onBlur={() => setCityName(inputValue)}
				onChange={(e) => setInputValue(e.target.value)} value={inputValue} 
				placeholder='Your cityname' required 
			/>
			<button className='Input__btn'>{children}</button>
		</form>
	)
}

export default Input;
