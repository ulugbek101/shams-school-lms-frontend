import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.drawerContent}>
				<DrawerItem
					style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
					label={() => <Text style={styles.drawerItemText}>Home</Text>}
					icon={() => <Icon name="home" size={24} color="#000" />}
					onPress={() => props.navigation.navigate("home")}
				/>
				<DrawerItem
					label={() => <Text style={styles.drawerItemText}>Profile</Text>}
					icon={() => <Icon name="user" size={24} color="#000" />}
					onPress={() => props.navigation.navigate("profile")}
				/>
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	drawerItemText: {
		fontWeight: "bold", // Make text bold
		fontSize: 16,
	},
});

export default CustomDrawerContent;
