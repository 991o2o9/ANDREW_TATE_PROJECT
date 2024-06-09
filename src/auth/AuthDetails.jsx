import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../fire'

const AuthDetails = () => {
	const [authUser, setAuthUset] = useState(null)
	useEffect(() => {
		const listen = onAuthStateChanged(auth, user => {
			if (user) {
				setAuthUset(user)
			} else {
				setAuthUset(null)
			}
		})
		return () => {
			listen()
		}
	}, [])
	function userSignOut() {
		signOut(auth)
			.then(() => console.log('success'))
			.catch(e => console.log(e))
	}
	return (
		<div className='auth-details-container'>
			{authUser ? (
				<div>
					<p>{`Signed in as ${authUser.email}`}</p>
					<button onClick={userSignOut}>Sign Out</button>
				</div>
			) : (
				<p>Signed Out</p>
			)}
		</div>
	)
}

export default AuthDetails
