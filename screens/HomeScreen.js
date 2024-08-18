import { useContext } from "react";
import { Text } from "react-native";
import Container from "../components/UI/Container";
import { AuthContext } from "../store/auth-context";

function HomeScreen() {
	const { user, authTokens } = useContext(AuthContext);

	// console.log(user, authTokens);
	return (
		<Container>
			<Text>Home screen</Text>
		</Container>
	);
}

export default HomeScreen;
