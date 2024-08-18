import { useContext, useState } from "react";
import { Image, StyleSheet, Text, ScrollView, View } from "react-native";
import Container from "../components/UI/Container";
import { AuthContext } from "../store/auth-context";

import userRoles from "../utils/status";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function ProfileScreen() {
	const { user } = useContext(AuthContext);
	const [email, setEmail] = useState(user.email);
	const [firstName, setFirstName] = useState(user.first_name);
	const [lastName, setLastName] = useState(user.last_name);

	return (
		<Container>
			<ScrollView style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.profileImage}
						source={{ uri: user.profile_image }}
					/>
				</View>
				<View>
					<Text style={styles.fullname}>
						{user.first_name} {user.last_name}
					</Text>
					<Text style={styles.status}>{userRoles[user.status]}</Text>
				</View>
				<View style={styles.userInfoContainer}>
					<Input
						labelStyle={{ color: "#000" }}
						label="E-mail manzil"
						inputStyle={{
							backgroundColor: null,
							borderColor: "#000",
							color: "#000",
						}}
						value={email}
						onChangeText={setEmail}
					/>
					<Input
						labelStyle={{ color: "#000" }}
						label="E-mail manzil"
						inputStyle={{
							backgroundColor: null,
							borderColor: "#000",
							color: "#000",
						}}
						value={lastName}
						onChangeText={setLastName}
					/>
					<Input
						labelStyle={{ color: "#000" }}
						label="Familiya"
						inputStyle={{
							backgroundColor: null,
							borderColor: "#000",
							color: "#000",
						}}
						value={lastName}
						onChangeText={setLastName}
					/>
					<Button>Ma'lumotlarni yangilash</Button>
				</View>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	imageContainer: {
		width: "100%",
		alignItems: "center",
	},
	profileImage: {
		width: 300,
		height: 300,
	},
	fullname: {
		fontWeight: "bold",
		fontSize: 24,
		textAlign: "center",
	},
	status: {
		textTransform: "uppercase",
		textAlign: "center",
		marginTop: 10,
		fontWeight: "bold",
	},
	userInfoContainer: {
		marginVertical: 20,
		gap: 15,
	},
});

export default ProfileScreen;
