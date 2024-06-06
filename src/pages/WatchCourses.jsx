import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCourse } from '../context/CoursesContextProvider'

const WatchCourses = () => {
	const { id } = useParams()
	const { courses, getCourses } = useCourse()
	const course = courses.find(course => course.id === parseInt(id))

	useEffect(() => {
		getCourses()
	}, [])

	return (
		<div className='course-page'>
			<header className='course-header'>
				<h1>{course.title}</h1>
			</header>
			<section className='course-info'>
				<p>{course.shortContent}</p>
			</section>
			<section className='course-video'>
				<h2>Video Lesson</h2>
				<video width='600' controls>
					<source src={course.video} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</section>

			<section className='course-details'>
				<h2>Main Information</h2>
				<p>{course.mainText}</p>
			</section>
		</div>
	)
}

export default WatchCourses
