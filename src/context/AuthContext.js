import { createContext, useContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log("provider");
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, userCredential => {
			setUser(userCredential);
			console.log("subscribe");
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ signup, login, logout, user }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
