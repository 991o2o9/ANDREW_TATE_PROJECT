import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../fire'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	function logIn(e) {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				console.log(user)
				setError('')
				setEmail('')
				setPassword('')
			})
			.catch(error => {
				console.log(error)
				setError("SORRY, COULDN'T FIND YOUR ACCOUNT")
			})
	}
	return (
		<div className='auth-container '>
			{' '}
			{/* Используем класс для стилизации */}
			<form>
				<h2>Log in</h2>
				<input
					placeholder='Please enter your email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='email'
				/>
				<input
					placeholder='Please enter your password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='password'
				/>
				<button onClick={logIn}>Login</button>
				{error ? <p className='error'>{error}</p> : ''}{' '}
				{/* Используем класс для стилизации */}
			</form>
		</div>
	)
}

export default SignIn
