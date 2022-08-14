const dateRexexp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
export const getDate = (date) => date.match(dateRexexp)[0];

const timeRegexp = /[0-9]{2}:[0-9]{2}/;
export const getHour = (date) => date.match(timeRegexp)[0];

export const getCurrentHour = () => new Date().getHours();

export const getCurrentDate = () =>  new Date().toLocaleDateString().split('.').reverse().join('-');

export const getDaysFromMs = (ms) => ms / 8640000; 