const dateRexexp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
export const getDate = (date) => date.match(dateRexexp)[0];

const timeRegexp = /[0-9]{2}:[0-9]{2}/;
export const getHour = (date) => date.match(timeRegexp)[0];

export const getCurrentHour = () => new Date().getHours();

export const getCurrentDate = () =>  new Date().toLocaleDateString().split('.').reverse().join('-');

export const getDateFrom = (date) => date.toLocaleDateString().split('.').reverse().join('-');

export const getDaysFromMs = (ms) => ms / 8640000;

//2022-08-14 -> 2022-08-15
export const getChangedDate = (currDate, shouldAdd = true) => {
	const dayMiliseconds = (24 * 60 * 60 * 1000);
	let timestamp = 
		shouldAdd ? currDate.getTime() + dayMiliseconds
					 : currDate.getTime() - dayMiliseconds;

	return getDateFrom(new Date(timestamp));
}