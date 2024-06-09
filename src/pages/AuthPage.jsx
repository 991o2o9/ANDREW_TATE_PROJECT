import React from 'react'
import AuthDetails from '../auth/AuthDetails'
import SignIn from '../auth/SignIn'

const AuthPage = () => {
	return (
		<div className='App'>
			<SignIn />
			<AuthDetails />
		</div>
	)
}

export default AuthPage
