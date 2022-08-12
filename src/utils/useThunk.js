import { useReducer } from "react";

const useThunk = (reducer, initState) => {
	const [state, dispatch] = useReducer(reducer, initState);
	const thunkDispatch = action => {
	  if (typeof action === "function") {
		 action(dispatch, () => state);
	  } else {
		 dispatch(action);
	  }
	};
	return [state, thunkDispatch];
};

export default useThunk;