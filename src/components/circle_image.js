import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Avatar } from "react-native-elements";

export default class CircleImage extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.profileImgContainer}>
                    <Image source={this.props.path} style={styles.profileImg} />
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
        height: 130,
        width: 130,
        borderRadius: 1,
        marginBottom: 30
    },
    profileImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 85,
        borderRadius: 100,
        backgroundColor: '#262F38', 
        borderColor: '#262F38', 
        borderWidth: 1 
    },
});
