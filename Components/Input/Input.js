import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

	state = {

	}
	//this.props.updateMemes(t.data.memes)
	//console.log("t.data.memes:  ", t.data.memes)

	//fetch(`https://api.imgflip.com/get_memes`)

	fetch = () => {
		// console.log('this is the value: ', this.props.value)
		// fetch json for 100 memes 
		fetch(`https://api.imgflip.com/get_memes`)
		.then((response) => {return response.json() })
		.then((t) => this.props.updateMemes(t.data.memes))

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
	    width: 400,
	    justifyContent: 'center',
	    borderRadius: 5,
	    borderWidth: 3,
	    borderColor: 'gray',
	    margin: 3,
	    padding: 45,
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
	    width: 150,
	    height: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#F887CD',
	    borderColor: 'gray',
	    borderRadius: 4,
	    borderWidth: 2
	  },
	  text: {
	  	color: 'white',
	  	fontWeight: 'bold'
	  }
})