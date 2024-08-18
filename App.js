import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "./components/UI/Button";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const drawerLabelStyle = {
	fontWeight: "bold", // Make text bold
};

function DrawerNavigator() {
	const navigation = useNavigation();
	const { logout } = useContext(AuthContext);

	function onLogout() {
		logout();
		navigation.replace("login");
	}

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerLabelStyle,
				drawerActiveTintColor: "#000",
				headerRight: () => <Button containerStyle={{ width: "", paddingHorizontal: 16, paddingVertical: 8, marginRight: 16 }} onPress={onLogout}>Chiqish</Button>,
			}}
		>
			<Drawer.Screen
				name="home"
				component={HomeScreen}
				options={{
					title: "Analitika",
					drawerIcon: () => <Icon name="analytics" size={20} color="#000" />,
				}}
			/>
			<Drawer.Screen
				name="groups"
				component={HomeScreen}
				options={{
					title: "Guruhlar",
					drawerIcon: () => <Icon name="people" size={20} color="#000" />,
				}}
			/>
			<Drawer.Screen
				name="teachers"
				component={HomeScreen}
				options={{
					title: "O'qituchilar",
					drawerIcon: () => <Icon name="school" size={20} color="#000" />,
				}}
			/>
			<Drawer.Screen
				name="profile"
				component={ProfileScreen}
				options={{
					title: "Profil",
					drawerIcon: () => <Icon name="person" size={20} color="#000" />,
				}}
			/>
		</Drawer.Navigator>
	);
}

function App() {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<AuthContextProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="login"
							component={LoginScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</AuthContextProvider>
			</NavigationContainer>
		</>
	);
}

export default App;
