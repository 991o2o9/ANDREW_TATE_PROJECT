import React, { useEffect, useState } from 'react'
import { useCourse } from '../context/CoursesContextProvider'
import AddTypeOfCourse from './AddTypeOfCourse'
import TypeOfCourseSelect from './TypeOfCourseSelect'

const AddCourses = () => {
	const { addCourses, getTypeOfCourse, typeOfCourse } = useCourse()
	useEffect(() => {
		getTypeOfCourse()
	}, [])
	const [courses, setCourses] = useState({
		imagePreview: '',
		title: '',
		typeOfCourse: '',
		shortContent: '',
		video: '',
		mainText: '',
	})

	const handleInput = e => {
		const obj = {
			...courses,
			[e.target.name]: e.target.value,
		}
		setCourses(obj)
	}

	const handleClick = () => {
		addCourses(courses)
	}

	return (
		<div
			className='AdminColor'
			style={{ paddingTop: '25px', backgroundColor: '#3b0000' }}
		>
			<div className='course-form'>
				<h2>Create Course</h2>
				<div className='form-group'>
					<label htmlFor='courseTitle'>Course Preview</label>
					<input
						type='text'
						id='coursePreview'
						name='imagePreview'
						onChange={handleInput}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseTitle'>Course Title</label>
					<input
						type='text'
						id='courseTitle'
						name='title'
						onChange={handleInput}
					/>
				</div>
				<div className='form-group'>
					<TypeOfCourseSelect
						handleInput={handleInput}
						typeOfCourse={typeOfCourse}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseDescription'>Short Course Description</label>
					<input
						type='text'
						id='courseDescription'
						name='shortContent'
						onChange={handleInput}
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
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='courseContent'>Main Text with Explanation</label>
					<textarea
						id='courseContent'
						name='mainText'
						rows='5'
						onChange={handleInput}
					></textarea>
				</div>
				<div className='button-group'>
					<button onClick={handleClick} type='submit' className='update-button'>
						Save
					</button>
					<AddTypeOfCourse />
				</div>
			</div>
		</div>
	)
}

export default AddCourses
