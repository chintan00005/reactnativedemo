/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './components/screens/HomeScreen'
import Dashboard from './components/screens/Dashboard'
import SplashScreen from './components/screens/SplashScreen'

import {styles} from './components/StyleSheets/AllStyleSheets'

import {
  StackNavigator,
} from 'react-navigation';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     {this.getNavigator()}
      </View>
    );
  }
  getNavigator = () =>{

    const Navigator = StackNavigator({
      SplashScreen : {screen : SplashScreen},
      Home :{screen:HomeScreen},
      Dashboard :{screen:Dashboard},
    })
    
      return <Navigator />
    }
}





