import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons,   } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Thunderstorm : {
        iconName: "weather-lightning",
        colors: ["#000000", "#434343"],
        subtitle: "it's lightning"
    },
    Clouds: {
        iconName: "weather-cloudy",
        colors: ["#000000", "#434343"],
        subtitle: "it's cloudy"
    },
    Rain : {
        iconName: "weather-pouring",
        colors: ["#373B44", "#4286f4"],
        subtitle: "it's pouring"
        
    },
    Haze: {
        iconName: "weather-hazy",
        colors: ["#3C3B3F", "#605C3C"],
        subtitle: "it's hazy"
    },
    Clear : {
        iconName: "weather-sunny",
        colors: ["#fc4a1a", "#f7b733"],
        subtitle: "it's sunny"
    },
    Snow :{
        iconName: "weather-snowy",
        colors: ["#D3CCE3", "#E9E4F0"],
        subtitle: "it's snowy"
    },
    Drizzle : {
        iconName: "weather-rainy",
        colors: ["#D3CCE3", "#E9E4F0"],
        subtitle: "it's drizzle"
    }

}

function Weather({temp, conditions}) {
    console.log(conditions)
    return (
            <LinearGradient colors={weatherOptions[conditions].colors} style={styles.container} >
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[conditions].iconName} size={86} color="white" />
                    <Text style={styles.temp}>
                        {temp}°
                    </Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer }}>
                    <Text style={styles.title}>The Weather is {conditions}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[conditions].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}

export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Haze"]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer : {
        alignItems: "flex-start"
    },
    temp: {
        fontSize: 43,
        color: 'white'
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        color: 'white',
        marginBottom: 20,
        paddingVertical: 10
    },
    subtitle: {
        fontSize: 24,
        color: 'white'
    }


})