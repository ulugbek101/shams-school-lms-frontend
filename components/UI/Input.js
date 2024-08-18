import { StyleSheet, Text, TextInput, View } from "react-native";

function Input(props) {
	return (
		<View style={styles.inputContainer}>
			<Text style={[styles.label, props.labelStyle]}>{props.label}:</Text>
			<TextInput {...props} style={[styles.input, props.inputStyle]} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "column",
		gap: 5,
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
});

export default Input;
