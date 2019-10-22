import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Avatar } from "react-native-elements";
import styles from './styles';

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
