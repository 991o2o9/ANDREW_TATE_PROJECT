import React from 'react'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursesPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import AuthPage from '../pages/AuthPage'
import NotFoundPage from '../pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import WatchCourses from '../pages/WatchCourses'
import EditCourses from '../courses/EditCourses'
import WatchLater from '../WatchLater/WatchLater'

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{ id: 1, link: '/', element: <HomePage /> },
		{ id: 2, link: '/courses', element: <CoursesPage /> },
		{ id: 3, link: '/about', element: <AboutPage /> },
		{ id: 4, link: '/contact', element: <ContactPage /> },
		{ id: 5, link: '/watchLater', element: <WatchLater /> },
		{ id: 6, link: '/auth', element: <AuthPage /> },
		{ id: 7, link: '*', element: <NotFoundPage /> },
		{ id: 8, link: '/coursePage/:id', element: <WatchCourses /> },
		{ id: 9, link: '/editInfoAboutCourse/:id', element: <EditCourses /> },
		{ id: 666, link: '/admin', element: <AdminPage /> },
	]
	return (
		<div>
			<Routes>
				{PUBLIC_ROUTES.map(elem => (
					<Route key={elem.id} path={elem.link} element={elem.element} />
				))}
			</Routes>
		</div>
	)
}

export default MainRoutes
