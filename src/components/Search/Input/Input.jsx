import React, {useState} from 'react';
import './Input.scss';

const Input = ({setCityName, setForecast, children}) => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className='Input'>
			<input 
				className='Input__field' type='text' onBlur={() => setCityName(inputValue)}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className='Input__btn' onClick={() => setForecast(inputValue)}>{children}</button>
		</div>
	)
}

export default Input;
