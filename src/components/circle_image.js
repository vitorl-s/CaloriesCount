import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Avatar } from "react-native-elements";

export default class CircleImage extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                style={this.props.containerStyle ? this.props.containerStyle
                    :styles.profileImgContainer}>
                    <Image source={this.props.path} 
                    style={this.props.style? this.props.style : 
                    styles.profileImg}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        resizeMode: 'contain',
        height: 140,
        width: 140,
        marginBottom: 30
    },
    profileImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 85,
        borderRadius: 40,
        backgroundColor: '#262F38', 
        borderColor: '#262F38', 
        borderWidth: 1 
    },
});
