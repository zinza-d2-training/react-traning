import React from 'react'
import './admin.scss'

interface Props {
    children: React.ReactNode;
}
const Auth = ({children}: Props) => {
	return <div>{children}</div>
}
export default Auth