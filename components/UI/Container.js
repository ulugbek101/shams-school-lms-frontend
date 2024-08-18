import { StyleSheet, View } from "react-native";

function Container({ children }) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 18,
		flex: 1,
	},
});

export default Container;
