import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { API, API_TYPE } from '../helper/const'
export const CourseContext = createContext()
export const useCourse = () => useContext(CourseContext)
export const CoursesContextProvider = ({ children }) => {
	const navigate = useNavigate()
	const INIT_STATE = {
		courses: [],
		oneCourse: {},
		typeOfCourse: [],
	}
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case 'GET_COURSES':
				return { ...state, courses: action.payload }
			case 'GET_ONE_COURSE':
				return { ...state, oneCourse: action.payload }
			case 'GET_TYPE_OF_COURSE':
				return { ...state, typeOfCourse: action.payload }
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
	// working with TypeOfCourse
	// get !
	const getTypeOfCourse = async () => {
		const { data } = await axios.get(API_TYPE)
		dispatch({
			type: 'GET_TYPE_OF_COURSE',
			payload: data,
		})
	}
	// ! get
	// create
	const createTypeOfCourse = async NEW_TYPE => {
		await axios.post(API_TYPE, NEW_TYPE)
	}
	// create
	// working with TypeOfCourse

	// filter
	const fetchByParams = (query, value) => {
		const search = new URLSearchParams(window.location.search)
		if (value === 'all') {
			search.delete(query)
		} else {
			search.set(query, value)
		}
		const url = `${window.location.pathname}?${search}`
		navigate(url)
	}
	const values = {
		createTypeOfCourse,
		typeOfCourse: state.typeOfCourse,
		getTypeOfCourse,
		fetchByParams,
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
