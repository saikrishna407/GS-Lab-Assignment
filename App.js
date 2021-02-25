/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LotsOfGreetings from './src/assets/HomePage';
// import HomePage from './src/assets/HomePage';
// import Temp from './src/assets/HomePage/Temp';
// import {One,Two} from './src/Components';

export default class App extends Component{
  render(){
    return(
      <View>
        <LotsOfGreetings />
        {/* <Two /> */}
      </View>
    );
  }
}