import React from 'react'
import { useFav } from '../context/WatchContextProvider'
import { Link } from 'react-router-dom'

const WatchLater = () => {
	const { fav } = useFav()

	return (
		<div className='watch-later-background'>
			<div className='watch-later-page'>
				<h1>Watch Later</h1>
				<div className='watch-later-list'>
					{fav.courses.map(elem => (
						<div key={elem.item.id} className='watch-later-item'>
							<Link to={`/coursePage/${elem.item.id}`}>
								<img
									src={elem.item.imagePreview}
									className='video-image'
									alt='Video Thumbnail'
								/>
							</Link>
							<div className='video-details'>
								<h3 className='video-detail-text'>{elem.item.title}</h3>
								<button className='watch-later-btn'>Delete</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default WatchLater
