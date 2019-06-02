import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import { Avatar } from "react-native-elements";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
        >
          <Image source={require('./images/gym.png')} style={styles.profileImg} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 400
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 180,
    width: 180,
    borderRadius: 400,
  },
});
