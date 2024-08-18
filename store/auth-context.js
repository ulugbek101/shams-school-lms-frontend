import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
	authTokens: null,
	user: null,
	login: async () => {},
	logout: () => {},
});

function AuthContextProvider({ children }) {
	const [authTokens, setAuthTokens] = useState(null);
	const [user, setUser] = useState(null);
	const navigation = useNavigation();

	useEffect(() => {
		async function getStoredTokens() {
			const storedTokens = await AsyncStorage.getItem("authTokens");

			if (storedTokens) {
				setAuthTokens(JSON.parse(storedTokens));
				setUser(jwtDecode(JSON.parse(storedTokens).access));
			}
		}

		getStoredTokens();
	}, []);

	async function login(email, password) {
		try {
			const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", {
				email,
				password,
			});
			setAuthTokens(response.data);
			setUser(jwtDecode(response.data.access));
			AsyncStorage.setItem("authTokens", JSON.stringify(response.data));
			navigation.replace("drawer");
		} catch (error) {
			console.log(error.message);
		}
	}

	function logout() {
		setAuthTokens(null);
		setUser(null);
		AsyncStorage.removeItem("authTokens");
	}

	const value = {
		authTokens,
		login,
		logout,
		user,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
