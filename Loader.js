import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Loader() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the Weathers</Text>
        </View>
    )
}

export default Loader;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 150,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})
