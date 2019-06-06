import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import { Avatar} from "react-native-elements";
import CircleImage from './src/components/circle_image';
import CardComponent from './src/components/card';

export default class App extends Component<Props> {
  render() {
    return (
        <CardComponent/>
    );
  }
}
