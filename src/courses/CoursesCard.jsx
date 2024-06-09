import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCourse } from '../context/CoursesContextProvider'
import watchIcon from '../home/assets/watchLater.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ADMIN } from '../helper/const'
import EditCourses from './EditCourses'
import { useFav } from '../context/WatchContextProvider'

const CoursesCard = ({ elem }) => {
	const { deleteCourse } = useCourse()
	const [currentUserEmail, setCurrentUserEmail] = useState(null)

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUserEmail(user.email)
			} else {
				setCurrentUserEmail(null)
			}
		})
	}, [])

	const isAdmin = () => {
		return currentUserEmail === ADMIN
	}

	const { addVidToWatchLater, checkCourseInFav } = useFav()

	return (
		<div className='product-card'>
			<h2 className='product-title'>{elem.title}</h2>
			<Link to={`/coursePage/${elem.id}`}>
				<img
					src={elem.imagePreview}
					className='product-image'
					alt={elem.title}
				/>
			</Link>
			<p className='product-description'>{elem.shortContent}</p>
			<div className='product-buttons'>
				{isAdmin() && (
					<>
						<Link to={`/editInfoAboutCourse/${elem.id}`}>
							<button className='edit-button'>Edit</button>
						</Link>
						<button
							className='delete-button'
							onClick={() => deleteCourse(elem.id)}
						>
							Delete
						</button>
					</>
				)}
				<img
					style={{ border: checkCourseInFav(elem.id) ? '2px solid white' : '' }}
					onClick={() => addVidToWatchLater(elem)}
					src={watchIcon}
					alt='Watch Later'
					className='watch-later-icon'
				/>
			</div>
		</div>
	)
}

export default CoursesCard
