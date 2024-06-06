import React from 'react'
import mainVideo from './assets/MainPageVideo.mp4'
import { Link } from 'react-router-dom'
const MainPage = () => {
	return (
		<div className='video-bg'>
			<video id='video-background' autoPlay muted loop>
				<source src={mainVideo} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className='overlay'></div>
			<div id='text-overlay'>
				<h1>BECOME A CHAMPION</h1>
				<p>I'm Andrew Tate - World Champion Kickboxer & Multi-Millionaire.</p>
				<p>I grew up broke and now I am a multi-millionaire.</p>
				<p>I teach the deserving the secrets to modern wealth creation.</p>
				<Link to={'/courses'}>
					<button>LEARN FROM THE BEST</button>
				</Link>
			</div>
		</div>
	)
}

export default MainPage
