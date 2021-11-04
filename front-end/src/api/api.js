import axios from "axios";

const urlBase = "http://localhost:50000/";

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