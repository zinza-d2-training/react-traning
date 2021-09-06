import {UserLoginData, Role, User} from './types'

export function login(user: UserLoginData) {
	
}

export function getUser(): User | undefined {
	return undefined;
}

export function getUserRole(): Role | undefined {
	return getUser()?.role;
}
