import React from 'react'
import { Link } from 'react-router-dom'
import { useCourse } from '../context/CoursesContextProvider'
import watchIcon from '../home/assets/watchLater.png'

const CoursesCard = ({ elem }) => {
	const { deleteCourse } = useCourse()
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
				<Link to={`/editInfoAboutCourse/${elem.id}`}>
					<button className='edit-button'>Edit</button>
				</Link>
				<button className='delete-button' onClick={() => deleteCourse(elem.id)}>
					Delete
				</button>
				<img src={watchIcon} alt='Watch Later' className='watch-later-icon' />
			</div>
		</div>
	)
}

export default CoursesCard
