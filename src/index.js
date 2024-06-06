import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CoursesContextProvider from './context/CoursesContextProvider'
import { BrowserRouter } from 'react-router-dom'
import WatchContextProvider from './context/WatchContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<WatchContextProvider>
			<CoursesContextProvider>
				<App />
			</CoursesContextProvider>
		</WatchContextProvider>
	</BrowserRouter>
)
