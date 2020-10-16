import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

	const [textInput, setChangeText] = useState('');

	const onChangeTextHandler = (inputText) => {
		setChangeText(textInput => inputText);
	}

	const [taskItems, setTaskItems] = useState([]);

	const onPressHandler = () => {
		setTaskItems(taskItems => [...taskItems, textInput])
		console.log(taskItems);
	};





	return (
		<View style={design.container}>
			<View style={design.form}>
				<View style={{ flex: 3 }}>
					<TextInput placeholder="Enter Task" style={design.inputControl} onChangeText={onChangeTextHandler} />
				</View>
				<View style={{ flex: 1 }}>
					<Button style={design.btn} title="Add New Task" onPress={onPressHandler} />
				</View>
			</View>
			<View>
				{
					taskItems.map((value, index) => {
						return (
							<View key={index} style={design.taskItem}>
								<Text>{value}</Text>
							</View>
						);
					})
				}
			</View>
		</View>
	);
}

const design = StyleSheet.create({
	container: {
		margin: 50
	},
	inputControl: {
		borderWidth: 2,
		borderColor: 'black',
		padding: 6,
		marginRight: 15
	},

	form: {
		flexDirection: 'row'
	},
	taskItem: {
		backgroundColor: 'gray',
		color: 'white',
		padding: 5,
		borderColor: 'black',
		borderWidth: 3,
		marginVertical: 5

	}
});
