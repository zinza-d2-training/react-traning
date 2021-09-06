import React from 'react'
import './admin.scss'

interface Props {
    children: React.ReactNode;
}

const Admin = ({children}: Props) => {
	return <div>{children}</div>
}

export default Admin;
