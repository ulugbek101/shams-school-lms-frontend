import { Pressable, StyleSheet, Text } from "react-native";

function Button({ children, onPress, containerStyle, buttonStyle }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.buttonContainer,
				containerStyle,
				pressed && styles.pressed,
			]}
		>
			<Text style={[styles.button, buttonStyle]}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: "100%",
		backgroundColor: "#000",
		paddingVertical: 12,
		borderRadius: 5,
	},
	button: {
		textAlign: "center",
		color: "#fff",
	},
	pressed: {
		opacity: 0.7,
	},
});

export default Button;
