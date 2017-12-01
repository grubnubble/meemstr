import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

//card component to display a single meme
class Card extends React.Component {
		render () {

		let testURL = 'https://api.imgur.com/3/gallery/hot/viral/0.json';

		return (
		        <View style={styles.card}>
		        	 <Image
		        	 	style={{width: 400, height: 400}}
		        	 	source={{uri: this.props.meme}}
		        	 />
		        </View>
		)
	}

}

// What happens when we get to the end of our 100 memes? We load more!
// future: just load them in the background without the need for user pushing a button
class EndCard extends React.Component {
	render () {
		return (
		        <View >
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

	handleAccept () {
		console.log("I like this meme.");
	}

	handleReject () {
		console.log("I hate this meme.");
	}

	render () {
		return (
		        <View>
		        	<SwipeCards
		        		cards={this.props.memes}
		        		renderCard={(meme) => <Card meme={meme.url} />}
		        		renderNoMoreCards={() => <EndCard/>}
		        		handleYup={this.handleAccept}
		        		handleNope={this.handleReject}
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