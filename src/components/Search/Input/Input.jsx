import React, {useState} from 'react';
import './Input.scss';

const Input = ({setCityName, setForecast, children, cityName}) => {
	const [inputValue, setInputValue] = useState(cityName);
	return (
		<form className='Input' onSubmit={(e) => e.preventDefault()}>
			<input  
				className='Input__field' type='text' onBlur={() => setCityName(inputValue)}
				onChange={(e) => setInputValue(e.target.value)} value={inputValue} 
				placeholder='Your cityname' required 
			/>
			<button className='Input__btn' onClick={() => setForecast(inputValue)}>{children}</button>
		</form>
	)
}

export default Input;
