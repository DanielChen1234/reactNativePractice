import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

export default class PlaceInput extends Component {

    state = {
        placeName: '',
    }

    placeNameChangedHandler = (evt) => {
        this.setState({placeName: evt})
    }

    placeSubmitHandler = () => {
        if (this.state.placeName !== ''){
          this.props.onPlaceAdded(this.state.placeName)
        }
    }

  render() {
    return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            value={this.placeName} 
            onChangeText={this.placeNameChangedHandler}
            placeholder="enter text here"
          />
        <Button
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          title="add" 
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
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
    }, 
})
