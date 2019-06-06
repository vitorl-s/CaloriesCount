import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Avatar } from "react-native-elements";

export default class CircleImage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.profileImgContainer}>
                    <Image source={require('../../images/gym.png')} style={styles.profileImg} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323C47',
    },
    profileImg: {
        resizeMode: 'contain',
        height: 170,
        width: 150,
        borderRadius: 1,
        marginBottom: 40
    },
    profileImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 105,
        borderRadius: 100,
        backgroundColor: '#262F38', 
        borderColor: '#262F38', 
        borderWidth: 1 
    },
});
