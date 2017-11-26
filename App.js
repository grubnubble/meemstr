import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';

export default class App extends React.Component {

  state = {
    memes: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          updateMemes={(memes) => this.setState({ memes: memes })}
        />
        <Text style={styles.text}>Welcome to Meemstr!</Text>
        <Text style={styles.text}>The true meeming of love</Text>
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
  }
});
