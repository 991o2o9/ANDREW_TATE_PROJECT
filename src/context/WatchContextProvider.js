import React, { createContext, useContext, useReducer } from 'react'
import { getLocalStorage } from '../helper/function'
export const cartContext = createContext()
export const useCart = () => useContext(cartContext)
const WatchContextProvider = ({ children }) => {
	const INIT_STATE = {
		fav: JSON.parse(localStorage.getItem('fav')),
	}
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case '':
				break

			default:
		}
	}
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	// Сейчас мы напишем GET запрос, чтобы получить их в список смотреть позже.
	const getFav = () => {
		let fav = getLocalStorage()
		if (!fav) {
			localStorage.setItem('fav', JSON.stringify({}))
		}
	}
	return <cartContext.Provider>{children}</cartContext.Provider>
}

export default WatchContextProvider
