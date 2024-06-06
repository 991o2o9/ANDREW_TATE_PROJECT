// используется для получения данных с хранилища
export const getLocalStorage = () => {
	const cart = JSON.parse(localStorage.getItem('cart'))
	return cart
}
