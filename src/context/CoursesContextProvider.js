import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../helper/const'
export const CourseContext = createContext()
export const useCourse = () => useContext(CourseContext)
export const CoursesContextProvider = ({ children }) => {
	const navigate = useNavigate()
	const INIT_STATE = {
		courses: [],
		oneCourse: [],
	}
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case 'GET_COURSES':
				return { ...state, courses: action.payload }
			case 'GET_ONE_COURSE':
				return { ...state, oneCourse: action.payload }
			default:
				return state
		}
	}
	// !
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	// !

	// !create
	const addCourses = async newCourses => {
		await axios.post(API, newCourses)
		navigate('/courses')
	}
	// end create
	// read start or get
	const getCourses = async () => {
		const { data } = await axios(API)
		dispatch({
			type: 'GET_COURSES',
			payload: data,
		})
	}
	// end start or get
	// delete start
	const deleteCourse = async id => {
		await axios.delete(`${API}/${id}`)
		getCourses()
	}
	// delete end
	// get one course
	const getOneCourse = async id => {
		const { data } = await axios(`${API}/${id}`)
		dispatch({
			type: 'GET_ONE_COURSE',
			payload: data,
		})
	}
	// get one course

	// edit courses
	const editCourse = async (id, editedCourseOfScam) => {
		await axios.patch(`${API}/${id}`, editedCourseOfScam)
		navigate('/courses')
	}
	// edit courses
	const values = {
		addCourses,
		courses: state.courses,
		getCourses,
		deleteCourse,
		oneCourse: state.oneCourse,
		editCourse,
		getOneCourse,
	}
	return (
		<CourseContext.Provider value={values}>{children}</CourseContext.Provider>
	)
}

export default CoursesContextProvider
