import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursesPage'
import AboutUs from '../pages/AboutUs'
import ContactPage from '../pages/ContactPage'
import AuthPage from '../pages/AuthPage'
import NotFoundPage from '../pages/NotFoundPage'
import AdminPage from '../pages/AdminPage'
import WatchCourses from '../pages/WatchCourses'
import EditCourses from '../courses/EditCourses'
import WatchLater from '../WatchLater/WatchLater'
import SignUpPage from '../pages/SignUpPage'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ADMIN } from '../helper/const'

const MainRoutes = () => {
	const [currentUserEmail, setCurrentUserEmail] = useState(null)

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUserEmail(user.email)
			} else {
				setCurrentUserEmail(null)
			}
		})
		return () => unsubscribe()
	}, [])

	const isAdmin = currentUserEmail === ADMIN

	const PUBLIC_ROUTES = [
		{ id: 1, link: '/', element: <HomePage /> },
		{ id: 2, link: '/courses', element: <CoursesPage /> },
		{ id: 3, link: '/about', element: <AboutUs /> },
		{ id: 4, link: '/contact', element: <ContactPage /> },
		{ id: 5, link: '/watchLater', element: <WatchLater /> },
		{ id: 6, link: '/auth', element: <AuthPage /> },
		{ id: 7, link: '*', element: <NotFoundPage /> },
		{ id: 8, link: '/coursePage/:id', element: <WatchCourses /> },
		{ id: 10, link: '/createAuth', element: <SignUpPage /> },
	]

	const PRIVATE_ROUTES = [
		{ id: 11, link: '/admin', element: <AdminPage /> },
		{ id: 12, link: '/editInfoAboutCourse/:id', element: <EditCourses /> },
	]

	return (
		<div>
			<Routes>
				{PUBLIC_ROUTES.map(elem => (
					<Route key={elem.id} path={elem.link} element={elem.element} />
				))}
				{isAdmin &&
					PRIVATE_ROUTES.map(elem => (
						<Route key={elem.id} path={elem.link} element={elem.element} />
					))}

				{!isAdmin &&
					PRIVATE_ROUTES.map(elem => (
						<Route
							key={elem.id}
							path={elem.link}
							element={<Navigate to='*' />}
						/>
					))}
			</Routes>
		</div>
	)
}

export default MainRoutes
