import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCourse } from '../context/CoursesContextProvider'

const EditCourses = () => {
	const { id } = useParams()
	const [course, setCourse] = useState({
		imagePreview: '',
		title: '',
		shortContent: '',
		video: '',
		mainText: '',
	})
	const { editCourse, oneCourse, getOneCourse } = useCourse()
	useEffect(() => {
		getOneCourse(id)
	}, [])
	const handleInput = e => {
		const obj = {
			...course,
			[e.target.name]: e.target.value,
		}
		setCourse(obj)
	}
	useEffect(() => {
		setCourse(oneCourse)
	}, [oneCourse])
	const handleClick = () => {
		editCourse(id, course)
	}
	console.log(course)
	return (
		<div
			className='AdminColor'
			style={{ paddingTop: '25px', backgroundColor: '#3b0000' }}
		>
			<div className='course-form'>
				<h2>Change Course</h2>
				<div className='form-group'>
					<label htmlFor='courseTitle'>Course Preview</label>
					<input
						type='text'
						id='coursePreview'
						name='imagePreview'
						onChange={handleInput}
						value={course.imagePreview}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseTitle'>Course Title</label>
					<input
						type='text'
						id='courseTitle'
						name='title'
						onChange={handleInput}
						value={course.title}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseDescription'>Short Course Description</label>
					<input
						type='text'
						id='courseDescription'
						name='shortContent'
						onChange={handleInput}
						value={course.shortContent}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseVideo'>Video Lesson</label>
					<input
						type='text'
						id='courseVideo'
						name='video'
						placeholder='Video URL'
						onChange={handleInput}
						value={course.video}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseContent'>Main Text with Explanation</label>
					<textarea
						id='courseContent'
						name='mainText'
						rows='5'
						onChange={handleInput}
						value={course.mainText}
					></textarea>
				</div>
				<div className='button-group'>
					<button onClick={handleClick} type='submit' className='update-button'>
						Save changes
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditCourses
