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

          <View style={styles.container}>
            <Text style={styles.text}>Welcome to Meemstr!</Text>
            <Text style={styles.text}>The true meeming of love</Text>
          </View>

          <Input 
            updateMemes={(memes) => this.setState({ memes: memes })}/>

          <Tinder 
            memes={this.state.memes}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCD2EC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 85,
  },
  tinder: {
    flex: 2,
  },
  text: {
    color: 'gray',
    fontWeight: 'bold',
  }
});
