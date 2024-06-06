import React, { useEffect } from 'react'
import { useCourse } from '../context/CoursesContextProvider'
import CoursesCard from './CoursesCard'

const CoursesList = () => {
	const { courses, getCourses } = useCourse()

	useEffect(() => {
		getCourses()
	}, [])

	return (
		<div className='courses-container'>
			{courses.map(course => (
				<CoursesCard key={course.id} elem={course} />
			))}
		</div>
	)
}

export default CoursesList
