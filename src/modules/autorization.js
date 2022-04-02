
import {email, password, apiKey} from './constante'

export function authEmailPassword() {
	return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
			returnSecureToken: true
			}),
		headers: {
			'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => data.idToken)
	}
