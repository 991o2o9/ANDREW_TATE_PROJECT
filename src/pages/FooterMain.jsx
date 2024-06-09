import React from 'react'
import { Link } from 'react-router-dom'

const FooterMain = () => {
	return (
		<footer>
			<div className='footerContainer'>
				<div className='socialIcons'>
					<a href='https://study.com/cimages/videopreview/videopreview-full/oqsdgp8y6y.jpg'>
						<i className='fa-brands fa-facebook'></i>
					</a>
					<a href='https://www.instagram.com/991o2o9/'>
						<i className='fa-brands fa-instagram'></i>
					</a>
					<a href='https://x.com/NASA'>
						<i className='fa-brands fa-twitter'></i>
					</a>

					<a href='https://www.youtube.com/watch?v=rxJtOm68TMk'>
						<i className='fa-brands fa-youtube'></i>
					</a>
				</div>
				<div className='footerNav'>
					<ul>
						<li>
							<a href=''>Home</a>
						</li>
						<li>
							<Link to={'/about'}>About</Link>
						</li>
						<li>
							<Link to={'/courses'}>Courses</Link>
						</li>
						<li>
							<Link to={'/contact'}>Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='footerBottom'>
				<p>
					Copyright &copy;2023; Designed by
					<span className='designer'>Winners</span>
				</p>
			</div>
		</footer>
	)
}

export default FooterMain
