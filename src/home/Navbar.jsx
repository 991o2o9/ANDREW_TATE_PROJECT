import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import main_logo from './assets/Tate-Logo-Web3.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ADMIN } from '../helper/const'

function Navbar() {
	const [currentUserEmail, setCurrentUserEmail] = useState(null)

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUserEmail(user.email)
			} else {
				setCurrentUserEmail(null)
			}
		})
		return () => unsubscribe()
	}, [])

	const isAdmin = currentUserEmail === ADMIN

	const pages = [
		{ id: 1, title: 'About us', link: '/about' },
		{ id: 2, title: 'Contact', link: '/contact' },
		{ id: 3, title: 'Courses', link: '/courses' },
		{ id: 4, title: 'Watch later', link: '/watchLater' },
	]

	// search
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('q') || '')

	const handleSearchChange = e => {
		setSearch(e.target.value)
		setSearchParams({ q: e.target.value }) // Обновление параметров URL
	}

	return (
		<div className='header'>
			<div className='container'>
				<div className='header-line'>
					<div className='header-logo'>
						<Link to='/'>
							<img src={main_logo} alt='Main Logo' />
						</Link>
					</div>
					<div className='nav'>
						{pages.map(elem => (
							<Link
								style={{ textDecoration: 'none' }}
								key={elem.id}
								to={elem.link}
								className='nav-item'
							>
								<p>{elem.title}</p>
							</Link>
						))}
						{isAdmin && (
							<Link
								style={{ textDecoration: 'none' }}
								to='/admin'
								className='nav-item'
							>
								<p>Admin</p>
							</Link>
						)}
					</div>
					<div className='nav-2'>
						<input
							onChange={handleSearchChange}
							type='text'
							className='search-input'
							value={search} // Держим значение синхронизированным
							placeholder='Search courses...'
						/>
						<Link className='nav-item-2' id='1' to='/auth'>
							GET BACK
						</Link>
						<Link className='nav-item-2' id='2' to='/createAuth'>
							CREATE HISTORY
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
