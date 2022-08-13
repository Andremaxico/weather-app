import { weatherAPI } from "../api";

export const kphToMps = (kph) => {
	return Math.round(kph / 3.6);
}
export const geoDecoder = async (cityName) => {
	const [coords] = await weatherAPI.getCoords(cityName);
	return coords;
}
export const geoCoder = async (lat, lon) => {
	const [ {name} ] = await weatherAPI.getCityName(lat, lon);
	return name;
}
window.geoCoder = geoCoder;