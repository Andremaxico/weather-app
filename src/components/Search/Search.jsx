import React from 'react';
import Input from './Input';

const Search = (props) => {
	return (
		<div className='Search'>
			<Input {...props}>
				Search
			</Input>
		</div>
	)
}

export default Search;