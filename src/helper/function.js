// используется для получения данных с хранилища
export const getLocalStorage = () => {
	const fav = JSON.parse(localStorage.getItem('fav'))
	return fav
}
