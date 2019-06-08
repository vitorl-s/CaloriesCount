import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,Button } from 'react-native';
import { Card } from "react-native-elements";
import CircleImage from './Circle_image';

export default class CardComponent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                    <View style={styles.insideContainer}>
                        <CircleImage/>
                        <View style={{ flexDirection: 'column',alignSelf: 'center'}}>
                            <Text style={styles.text}> {this.props.exercise}</Text>
                            <View style={{ flexDirection: 'row'}}> 
                                <Text style = {styles.infoText}> {this.props.calories + ' Kcal'} </Text>
                                <Text style = {styles.infoText}> {this.props.time} </Text>
                                <Text style = {styles.infoText}> {this.props.weight}</Text>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232C34',
        flexDirection: 'column',
    },
    card:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        backgroundColor: '#323C47',
        marginTop: 10,
        borderWidth:0,
        borderRadius: 13,
        height:115
    },
    text:{
        alignSelf: 'flex-start',
        marginLeft: 30,
        color:'#FEFFFF',
        marginBottom: 20,
    },
    insideContainer:{
        alignItems: 'flex-start', 
        flexDirection: 'row',
    },
    infoText:{
        marginLeft: 25,
        color: '#FEFFFF',
    }
});
