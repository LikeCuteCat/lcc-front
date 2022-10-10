import axios from 'axios';

function create(baseURL: string, options?: object) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const notices = create(`${import.meta.env.VITE_APP_API_URL}notices`);
