import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

	state = {

	}

	fetch = () => {
		// console.log('this is the value: ', this.props.value)
		// fetch json for 100 memes 
		fetch(`https://api.imgflip.com/get_memes`)
		.then((response) => {return response.json() })
		.then((data) => console.log('data: ', data))

	}

	render () {
		return (
		        <View style={styles.container}>
		        	<TouchableHighlight
		        		onPress={() => this.fetch()}
		        		style={styles.button}
		        	>
		        	 <Text style={styles.text}>Meme Me</Text>
		        	</TouchableHighlight>
		        </View>
		)
	}

}

//flex: 1 means take up the entire screen (no divisions)
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
		padding: 5
	},
	input: {
		height: 40,
		width: 300,
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: 2,
		margin: 3
	},
	  button: {
	    width: 100,
	    height: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#F887CD',
	    marginBottom: 50,
	    borderColor: 'gray',
	    borderRadius: 4,
	    borderWidth: 2
	  },
	  text: {
	  	color: 'white',
	  	fontWeight: 'bold'
	  }
})