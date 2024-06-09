import React from 'react'
import tow_7 from '../home/assets/loh.jpg'
import { Link } from 'react-router-dom'

const Container3 = () => (
	<div className='container-3'>
		<div className='photo-3'>
			<img src={tow_7} alt='' />
		</div>
		<div id='text-3'>
			<h1>THE WAR ROOM</h1>
			<p>
				99% of modern-day men will never experience the power of <br />
				Brotherhood and Community.
			</p>
			<p>To be among the most energetic and lucky Men in the world.</p>
			<p>
				Inside THE WAR ROOM you will access knowledge that will spark <br />
				your genius and compel you to work your hardest to keep up.
			</p>
			<p>There is no other place on earth with Men of this caliber.</p>
			<Link to={'/about'}>
				<button id='btn-3'>DISCOVER MORE</button>
			</Link>
		</div>
	</div>
)

export default Container3
