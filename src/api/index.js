import * as axios from 'axios';

const API_KEY = '914eabc4873200e9394be6b0f7204ebf';

const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/',
});

console.log(instance);

export const weatherAPI = {
	async getResponse(lat, lon, exclude='daily') {
		console.log(lat, lon);
		return instance.get(`data/2.5/forecast?units=metric&lang=ua&lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}`)
		.then(res => res.data);
	},
	async getCoords(cityname) {
		return instance.get(`geo/1.0/direct?q=${cityname}&limit=1&appid=${API_KEY}`)
		.then(res => res.data)
	},
}