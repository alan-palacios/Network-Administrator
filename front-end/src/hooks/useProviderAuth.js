import { useState } from "react";
import api from "../api/api";

export default function useProviderAuth() {
	const [user, setUser] = useState(null);

	const signin = (user, callback) => {
        /*api("user/login", "POST", user)
		.then(res => {
			setUser(res.data);
			callback();
		})
        .catch((error) =>{
			console.log(error);
        });*/
		setUser("dfa");
		callback();
	};

	const signout = callback => {
		setUser(null);
		callback();
	};
	//const request = async (url, method, data )=> await api(url, method, data, user.token);

	return {
		user,
		signin,
		signout
	};
}