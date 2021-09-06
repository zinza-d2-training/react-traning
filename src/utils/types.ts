export interface UserLoginData {
	username: string;
	password: string;
}

export enum Role {
	Admin = 'admin',
	PM = 'pm',
	Member = 'member'
}

export interface User {
	id: number;
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	role: Role,
}