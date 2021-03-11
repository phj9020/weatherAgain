import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from "axios";
import Loader from './Loader';
import Weather from './Weather';
import * as Location from 'expo-location';
import { Alert } from "react-native";

const API_KEY = "3c8d4085289225e6f31bb324d8feb556";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp : null,
    conditions: null,
  }
  getWeather = async (latitude, longitude) => {
    const {data : { main : {temp}, weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric
      `
    );
    this.setState({isLoading: false, temp : temp, conditions: weather[0].main})
  };
  
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, conditions} = this.state;
    
    return ( 
      isLoading ? <Loader /> : <Weather temp={Math.round(temp)} conditions={conditions} />
    )
  } 
}


