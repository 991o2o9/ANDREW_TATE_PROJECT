// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDei5HKPcf06HtaxUTuKMoZUkbMfwk5lE8',
	authDomain: 'andrewtatemadebywinners.firebaseapp.com',
	projectId: 'andrewtatemadebywinners',
	storageBucket: 'andrewtatemadebywinners.appspot.com',
	messagingSenderId: '328023635964',
	appId: '1:328023635964:web:51f9858e1a257058be6479',
	measurementId: 'G-B5BZQEFR6V',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
