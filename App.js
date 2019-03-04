/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (evt) => {
    this.setState({placeName: evt})
  }

  placeSubmitHandler = () => {
    if (this.state.placeName !== ''){
      this.setState({
        places: [...this.state.places, this.state.placeName]
      })
    }
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.placeInput}
              value={this.state.placeName} 
              onChangeText={this.placeNameChangedHandler}
              placeholder="enter text here"
            />
          <Button
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title="add" 
          />
        </View>

        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: "100%"
  },

  placeInput: {
    width: "70%"
  },

  placeButton: {
    width: "30%"
  }
});
