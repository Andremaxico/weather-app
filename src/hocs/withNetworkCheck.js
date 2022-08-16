import React, {useThunk} from 'react';
import NetworkError from '../components/NetworkError/NetworkError';
import ErrorContext from '../Context/ErrorContext';


const withNetworkCheck = (Component) => (props) => {
	return (
		<ErrorContext.Consumer>
			{error => {
				if(error) {
					return <NetworkError message={error}/>
				}
			
				return <Component {...props} />
			}}
		</ErrorContext.Consumer>
	)
}

export default withNetworkCheck;