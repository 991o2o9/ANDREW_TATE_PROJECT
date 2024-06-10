import React from 'react'
import aboutPic from '../home/assets/aboutPagePic.webp'
import { Link } from 'react-router-dom'
function AboutUs() {
	return (
		<section
			style={{ fontFamily: "'Poppins', sans-serif" }}
			className='about-us'
		>
			<div className='about'>
				<img src={aboutPic} className='pic' alt='Andrew Tate' />
				<div className='text'>
					<h2>About Us</h2>
					<h5>
						World Champion Kickboxer &
						<span>
							<br />
							Multi-Millionaire
						</span>
					</h5>
					<p>
						Andrew Tate offers courses in various aspects of life, including
						business, fitness, psychology and personal development. Here are
						some of the main topics you can learn in his courses: <br />
						<br />
						- Business and Marketing: Learn strategies for creating and growing
						a successful business, including promotion and monetization. <br />
						<br />
						- Psychology and Mental Strength: Learn techniques for managing
						stress, improving self-discipline, and achieving goals. <br />
						<br />- Personal Relationships: Get tips for building healthy and
						successful relationships with the people around you.
					</p>
					<div className='data'>
						<Link to={'/contact'} className='hire'>
							Hire Me
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
