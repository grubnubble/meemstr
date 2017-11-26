import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

//card component to display a single meme
class Card extends React.Component {
		render () {
		return (
		        <View style={styles.card}>
		        	 <Text>{this.props.memes}</Text>
		        </View>
		)
	}

}

// What happens when we get to the end of our 100 memes? We load more!
// future: just load them in the background without the need for user pushing a button
class EndCard extends React.Component {
	render () {
		return (
		        <View style={styles.card}>
		        	<Text>Uh oh, out of memes!</Text>
		        	<View style={styles.button}>
		        		<Text style={styles.text}>Load more?</Text>
		        	</View>
		        </View>
		        )
	}
}

//main component
export default class Tinder extends React.Component {
		render () {
		return (
		        <View>
		        	<SwipeCards
		        		cards={this.props.memes}
		        		renderCard={(meme) => <Card meme={meme} />}
		        	/>
		        </View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
		padding: 5
	},
	card: {
		width: 300,
		height: 300,
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 2,
		backgroundColor: '#F887CD',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
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
	    marginTop: 10,
	    borderColor: 'gray',
	    borderRadius: 4,
	    borderWidth: 2
	  },
	  text: {
	  	color: 'white',
	  	fontWeight: 'bold'
	  }
})