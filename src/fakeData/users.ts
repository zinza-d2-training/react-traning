import {User, Role} from '../utils/types'
export const USERS: User[] = [
{
	id: 1,
	username: 'admin',
	password: '123456',
	first_name: 'admin',
	last_name: 'admin',
	role: Role.Admin,
},
{
	id: 2,
	username: 'projectmanager',
	password: '123456',
	first_name: 'Ng Van',
	last_name: 'A',
	role: Role.PM,
},
{
	id: 3,
	username: 'member',
	password: '123456',
	first_name: 'Ng Van',
	last_name: 'B',
	role: Role.Member,
}
]