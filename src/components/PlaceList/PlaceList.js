import React from 'react';
import {FlatList, StyleSheet} from 'react-native'
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {

    return (
        <FlatList style={styles.listContainer} 
        data={props.places} // takes in the places array and 'maps' over it
        renderItem={(info) => ( //render item returns jsx
            <ListItem 
                placeName={info.item.value} //access the 'value' key that we entered
                onItemPressed={() => props.onItemDeleted(info.item.key)}
            />
        )}/>
    )
    
}

export default PlaceList

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})