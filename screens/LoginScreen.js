import { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
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
		login(email, password);
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

					<Input
						label="E-mail manzil"
						onChangeText={setEmail}
						value={email}
						autoCapitalize={false}
						autoCorrect={false}
						autoFocus={true}
						autoComplete={false}
						keyboardType="email-address"
					/>

					<Input
						label="Parol"
						onChangeText={setPassword}
						value={password}
						autoCapitalize={false}
						autoCorrect={false}
						autoComplete={false}
						keyboardType="password"
						secureTextEntry={true}
					/>

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
	formContainer: {
		width: "80%",
		flexDirection: "column",
		gap: 20,
		marginTop: 150,
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
