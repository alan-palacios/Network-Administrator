import axios from "axios";

const urlBase = "http://0.0.0.0:5000/api";

const readUrl = (url = '') =>
  url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`

const api = async (url, method, data, token)=> 
	await axios({ 
		url: readUrl(url),
		data,
		method,
		headers:{
			'auth-token': token || ''
		}
	});

export default api;