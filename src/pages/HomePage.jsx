import React from 'react'
import MainPage from '../home/MainPage'
import SliderWithInfo from './SliderWithInfo'
import DiscoverMore from './DiscoverMore'
import VideoPage from './VideoPage'
import FooterMain from './FooterMain'

const HomePage = () => {
	return (
		<div>
			<MainPage />
			<SliderWithInfo />
			<DiscoverMore />
			<VideoPage />
			<FooterMain />
		</div>
	)
}

export default HomePage
