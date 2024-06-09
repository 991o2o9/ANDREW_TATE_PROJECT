import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { getLocalStorage } from '../helper/function'

export const cartContext = createContext()
export const useFav = () => useContext(cartContext)

const WatchContextProvider = ({ children }) => {
	const INIT_STATE = {
		fav: JSON.parse(localStorage.getItem('fav')) || { courses: [] },
	}

	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case 'GET_FAV':
				return { ...state, fav: action.payload }

			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getFav = () => {
		let fav = getLocalStorage() || { courses: [] }
		if (!fav.courses) {
			fav.courses = []
		}
		dispatch({
			type: 'GET_FAV',
			payload: fav,
		})
	}

	const addVidToWatchLater = course => {
		let fav = getLocalStorage() || { courses: [] }
		if (!fav.courses) {
			fav.courses = []
		}
		let newFav = {
			item: course,
			count: 1,
		}
		let FavToFind = fav.courses.filter(elem => elem.item.id === course.id)
		if (FavToFind.length === 0) {
			fav.courses.push(newFav)
		} else {
			fav.courses = fav.courses.filter(elem => elem.item.id !== course.id)
		}
		localStorage.setItem('fav', JSON.stringify(fav))
		dispatch({
			type: 'GET_FAV',
			payload: fav,
		})
	}

	const checkCourseInFav = id => {
		let fav = getLocalStorage() || { courses: [] }
		if (fav.courses) {
			let newFav = fav.courses.filter(elem => elem.item.id === id)
			return newFav.length > 0
		}
		return false
	}

	useEffect(() => {
		getFav()
	}, [])

	const values = {
		checkCourseInFav,
		addVidToWatchLater,
		fav: state.fav,
		getFav,
	}

	return <cartContext.Provider value={values}>{children}</cartContext.Provider>
}

export default WatchContextProvider
