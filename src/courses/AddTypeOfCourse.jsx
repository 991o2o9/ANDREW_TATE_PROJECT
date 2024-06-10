import React, { useState } from 'react'
import { useCourse } from '../context/CoursesContextProvider'

const AddTypeOfCourse = () => {
	const { createTypeOfCourse } = useCourse()
	const [typeOfCourse, setTypeOfCourse] = useState('')
	const clearInputs = () => {
		setTypeOfCourse('')
	}
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const handleClick = () => {
		if (!typeOfCourse.trim()) {
			console.log('Fill it in')
			return
		}
		const newType = {
			name: typeOfCourse,
		}
		createTypeOfCourse(newType)
		handleClose()
	}

	const [open, setOpen] = useState(false)

	return (
		<div>
			<button onClick={handleOpen} className='open-modal-btn'>
				Add Category
			</button>
			{open && (
				<div className='modal'>
					<div className='modal-content'>
						<h2>Add category</h2>
						<input
							type='text'
							className='modal-input'
							onChange={e => setTypeOfCourse(e.target.value)}
							value={typeOfCourse}
							placeholder='Enter category'
						/>
						<div className='modal-buttons'>
							<button onClick={handleClick} className='modal-btn'>
								Add
							</button>
							<button onClick={handleClose} className='modal-btn close-btn'>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default AddTypeOfCourse
