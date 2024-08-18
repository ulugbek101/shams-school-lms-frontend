import { useContext, useEffect, useState } from "react";
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Button from "../components/UI/Button";
import { AuthContext } from "../store/auth-context";

function LoginScreen({ route, navigation }) {
	const { user, authTokens, login } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formIsValid, setFormIsValid] = useState();

	useEffect(() => {
		if (user) {
			navigation.replace("drawer");
		}
	}, [user, authTokens]);

	useEffect(() => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ru|com|uz)$/;
		setFormIsValid(emailRegex.test(email) && password.length >= 1);
	}, [email, password]);

	async function onFormSubmit() {
		if (!formIsValid) return;
		try {
			login(email, password);
			navigation.replace("drawer");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<StatusBar style="light" />
			<ImageBackground
				source={require("../assets/login.jpg")}
				style={styles.container}
			>
				<View style={styles.formContainer}>
					<View style={styles.iconContainer}>
						<Image
							style={styles.icon}
							source={require("../assets/login_icon.jpg")}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>E-mail manzil:</Text>
						<TextInput
							onChangeText={setEmail}
							value={email}
							style={styles.input}
							autoCapitalize={false}
							autoCorrect={false}
							autoFocus={true}
							autoComplete={false}
							keyboardType="email-address"
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Parol:</Text>
						<TextInput
							onChangeText={setPassword}
							value={password}
							style={styles.input}
							autoCapitalize={false}
							autoCorrect={false}
							autoComplete={false}
							keyboardType="password"
							secureTextEntry={true}
						/>
					</View>

					{/* {error && (
						<View style={styles.errorContainer}>
							<Text style={styles.errorElement}>{error}</Text>
						</View>
					)} */}

					<Button
						buttonStyle={[{ fontWeight: "bold", fontSize: 16 }]}
						containerStyle={[
							!formIsValid && { opacity: 0.6, backgroundColor: "#313131" },
						]}
						onPress={onFormSubmit}
					>
						Tizimga kirish
					</Button>
				</View>
			</ImageBackground>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		height: "100%",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "column",
		gap: 5,
	},
	formContainer: {
		width: "80%",
		flexDirection: "column",
		gap: 20,
		marginTop: 150,
	},
	input: {
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		borderColor: "#fff",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		fontWeight: "bold",
		color: "#fff",
	},
	label: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	errorElement: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
	iconContainer: {
		alignItems: "center",
		marginBottom: 50,
	},
	icon: {
		width: 150,
		height: 150,
		borderRadius: 75, // Half of the width/height for a perfect circle
	},
});

export default LoginScreen;
