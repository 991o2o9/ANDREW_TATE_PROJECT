import React from 'react'

const WatchLater = () => {
	return (
		<div className='watch-later-background'>
			<div className='watch-later-page'>
				<h1>Watch Later</h1>
				<div className='watch-later-list'>
					<div className='watch-later-item'>
						<img
							// src={video.image}
							// alt={video.title}
							className='video-image'
						/>
						<div className='video-details'>
							<h3>blaaoshduhasdsaidsdsg</h3>
							<button className='delete-button-watch-later'>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WatchLater
