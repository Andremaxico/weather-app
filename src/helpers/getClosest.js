export const comparator2 = function(lo, hi, valueToFind) {
	var result = lo; // or hi

	switch (true) {
		 case valueToFind - lo < hi - valueToFind:
			  result = lo;
			  break;
		 case valueToFind - lo > hi - valueToFind:
			  result = hi;
			  break;
	}

	return result;
};

const getClosest = (settings) => {

	var lo          = -Infinity,
		 hi          = Infinity,
		 arr         = settings.arr,
		 valueToFind = settings.valueToFind,
		 comparator  = settings.comparator,
		 result;

	  for (var i = 0; i < arr.length; i++) {

			if (arr[i] <= valueToFind && arr[i] >= lo) {
				 lo = arr[i];
				 continue;
			}

			if (arr[i] >= valueToFind && arr[i] <= hi) {
				 hi = arr[i];
			}
	  }

	  result = comparator2(lo, hi, valueToFind);

	  return isFinite(result) ? result : undefined; // or false
}



export var comparator1 = function(lo, hi, valueToFind) {
	return lo; // or hi
};

export default getClosest;