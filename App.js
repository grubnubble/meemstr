import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default class App extends React.Component {

  state = {
    memes: [],
  }
  //could move fetch here instead of having input component

  render() {
    // console.log("app.js memes: ", this.state.memes)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Meemstr!</Text>
        <Text style={styles.text}>The true meeming of love</Text>
        <Input 
          updateMemes={(memes) => this.setState({ memes: memes })}
        />

        <Tinder
          memes={this.state.memes}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCD2EC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'red'
  },
  tinder: {
    flex: 2,
  },
  button: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    margin: 50,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 2
  },
  text: {
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 45,
  }
});
