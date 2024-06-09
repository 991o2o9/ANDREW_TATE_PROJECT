import React from 'react'
import videoShit from '../home/assets/VIDEOFOOTER.mp4'
import { Link } from 'react-router-dom'
const VideoPage = () => {
	return (
		<div style={{ backgroundColor: 'black' }}>
			<div class='thin-line'></div>
			<div class='footer'>
				<div id='text-4'>
					<p>LEARN THE SECRETS</p>
					<h1>KEEP UP WITH THE TATES</h1>
				</div>
				<div class='video-bg-footer'>
					<video src={videoShit} autoplay muted loop></video>
				</div>
				<div class='thin-line-1'></div>
				<div id='text-5'>
					<h1>THE TATE NEWSLETTER</h1>
					<p>YOUR COMPETITIVE ADVANTAGE</p>
					<Link to={'/contact'}>
						<button id='btn-5'>CONTACTS</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default VideoPage
