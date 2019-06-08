import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import { Avatar} from "react-native-elements";
import Home from './src/screens/Home';

export default class App extends Component<Props> {
  render() {
    return (
        <Home/>
    );
  }
}
