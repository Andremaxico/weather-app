import * as axios from 'axios';

const API_KEY = '0018440325e94a6d98374825221308';
const API_KEY_2 = '636f429c2c0f965eec6362d080ac0b8e';

const instance = axios.create({
	baseURL: 'http://api.weatherapi.com/v1/',
});

export const weatherAPI = {
	async getResponse(lat, lon, exclude='daily') {
		console.log(lat, lon);
		return instance.get(`data/2.5/forecast?units=metric&lang=ua&lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}`)
		.then(res => res.data);
	},
	async getForecast(coords, daysCount=7) {
		return instance.get(`forecast.json?key=${API_KEY}&q=${coords.lat},${coords.lon}&days=${daysCount}`)
		.then(res => res.data);
	},
	async getCoords(cityname) {
		return instance.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${API_KEY_2}`)
		.then(res => res.data)
	},
	async getCityName(lat, lon) {
		return instance.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY_2}`)
		.then(res => res.data)
	}
}