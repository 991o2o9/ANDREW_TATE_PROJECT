import React from 'react'

const PaginationControlled = ({ page, count, handleChange }) => {
	const pages = Array.from({ length: count }, (_, i) => i + 1)

	return (
		<div className='pagination-container'>
			<div className='pagination-page-info'>
				<p>Page: {page}</p>
			</div>
			<div className='pagination-buttons'>
				{pages.map(num => (
					<button
						key={num}
						className={`pagination-button ${num === page ? 'active' : ''}`}
						onClick={() => handleChange(null, num)}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	)
}

export default PaginationControlled
