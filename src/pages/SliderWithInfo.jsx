import React from 'react'
import tow_1 from '../home/assets/tow_1.webp'
import tow_2 from '../home/assets/tow_2.webp'
import tow_3 from '../home/assets/tow_3.webp'
import tow_4 from '../home/assets/tow_4.webp'
import tow_5 from '../home/assets/41_1.webp'
import tow_6 from '../home/assets/tow_5.jpg'

const SliderWithInfo = () => {
	return (
		<div>
			<div className='thin-line'></div>
			<div id='text-2'>
				<p>LEARN THE SECRETS</p>
				<h1>TATE WISDOM</h1>
			</div>
			<div className='container-2'>
				<div className='slide'>
					<div className='item' style={{ backgroundImage: `url(${tow_1})` }}>
						<div className='content'>
							<div className='name'>Tales of Wudan</div>
							<div className='des'>
								The Tales of Wudan are original stories written by Andrew Tate
								himself in the height of his fighting career. These lessons
								detail the wisdom he absorbed through his trials as he trained
								under Master Po.
							</div>
						</div>
					</div>
					<div className='item' style={{ backgroundImage: `url(${tow_2})` }}>
						<div className='content'>
							<div className='name'>Lessons from fighting</div>
							<div className='des'>
								Here are some lessons from professional fighting which translate
								perfectly into real life. You are always tired when you are
								losing. Everybody loves a winner. Nobody believes your excuses.
								So why do you even use them?
							</div>
						</div>
					</div>
					<div className='item' style={{ backgroundImage: `url(${tow_3})` }}>
						<div className='content'>
							<div className='name'>YOUNG KINGS</div>
							<div className='des'>
								Young men go to war and young men die so the old men can get
								what they want. Do you know what you’re fighting for?
							</div>
						</div>
					</div>
					<div className='item' style={{ backgroundImage: `url(${tow_4})` }}>
						<div className='content'>
							<div className='name'>Tate Pledge</div>
							<div className='des'>
								Tate Pledge addresses vital needs like water, food, support for
								orphans, care for stray dogs, and school equipment provision.
							</div>
						</div>
					</div>
					<div className='item' style={{ backgroundImage: `url(${tow_5})` }}>
						<div className='content'>
							<div className='name'>41 TENETS</div>
							<div className='des'>
								There are 41 of them and it doesn't matter if you are black it
								doesn't matter if you are white, Christian, Muslim it doesn't
								matter if you are strong, weak, rich, or poor you need to live
								your life by these 41 Tenets.
							</div>
						</div>
					</div>
					<div className='item' style={{ backgroundImage: `url(${tow_6})` }}>
						<div className='content'>
							<div className='name'>ANDREW TATE</div>
							<div className='des'>
								Emory Andrew Tate III (born 1 December 1986) is an
								American-British social media personality and businessman;
								former professional kickboxer and pimp. His controversial
								commentary has resulted in his expulsions from various social
								media platforms and concern that he promotes misogynist views to
								his audience.
							</div>
						</div>
					</div>
				</div>
				<div className='button'>
					<button className='prev'>
						<i className='fa-solid fa-arrow-left'></i>
					</button>
					<button className='next'>
						<i className='fa-solid fa-arrow-right'></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SliderWithInfo
