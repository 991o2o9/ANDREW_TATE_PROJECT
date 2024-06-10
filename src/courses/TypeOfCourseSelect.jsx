import React from 'react'

const TypeOfCourseSelect = ({ typeOfCourse, handleInput }) => {
	console.log(typeOfCourse)
	return (
		<div className='custom-filter-container'>
			<label htmlFor='custom-category' className='custom-filter-label'>
				Direction of study:
			</label>
			<select
				id='custom-category'
				className='custom-filter-select'
				onChange={handleInput}
				name='typeOfCourse'
			>
				<option value=''>Select a direction</option>
				{typeOfCourse.map(elem => (
					<option key={elem.id} value={elem.name}>
						{elem.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default TypeOfCourseSelect
