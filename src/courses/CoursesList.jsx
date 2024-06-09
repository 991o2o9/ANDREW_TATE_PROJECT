import React, { useEffect, useState } from 'react'
import { useCourse } from '../context/CoursesContextProvider'
import CoursesCard from './CoursesCard'
import PaginationControlled from './PaginationControlled'
import { useSearchParams } from 'react-router-dom'

const CoursesList = () => {
	const { courses, getCourses } = useCourse()
	const [page, setPage] = useState(1)
	const [searchParams] = useSearchParams()
	const searchQuery = searchParams.get('q') || ''

	useEffect(() => {
		getCourses()
	}, [getCourses])

	useEffect(() => {
		setPage(1)
	}, [searchQuery])

	const filteredCourses = courses.filter(course =>
		course.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	// Пагинация
	const itemsPerPage = 3
	const count = Math.ceil(filteredCourses.length / itemsPerPage)

	const currentData = () => {
		const begin = (page - 1) * itemsPerPage
		const end = begin + itemsPerPage
		return filteredCourses.slice(begin, end)
	}

	const handleChange = (event, value) => {
		setPage(value)
	}

	return (
		<div className='courses-container'>
			<div className='courses-grid'>
				{currentData().map(course => (
					<CoursesCard key={course.id} elem={course} />
				))}
			</div>
			<div className='pagination-wrapper'>
				<PaginationControlled
					page={page}
					count={count}
					handleChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default CoursesList
