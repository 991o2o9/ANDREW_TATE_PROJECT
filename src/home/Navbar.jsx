import React from 'react'
import { Link } from 'react-router-dom'
import main_logo from './assets/Tate-Logo-Web3.png'

function Navbar() {
	const pages = [
		{ id: 1, title: 'About us', link: '/about' },
		{ id: 2, title: 'Contact', link: '/contact' },
		{ id: 3, title: 'Courses', link: '/courses' },
		{ id: 4, title: 'ADMIN', link: '/admin' },
		{ id: 5, title: 'Watch later', link: '/watchLater' },
	]

	return (
		<div className='header'>
			<div className='container'>
				<div className='header-line'>
					<div className='header-logo'>
						<Link to={'/'}>
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
					</div>
					<div className='nav-2'>
						<input
							type='text'
							className='search-input'
							placeholder='Search courses...'
						/>
						<Link className='nav-item-2' id='1' to='#'>
							GET BACK
						</Link>
						<Link className='nav-item-2' id='2' to='#'>
							CREATE HISTORY
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
