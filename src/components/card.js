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
                            <Text style={styles.text}> {this.props.exercise.toUpperCase()}</Text>
                            <View style={{ flexDirection: 'row'}}> 
                                <Image source={require('../../img/ic_bike.png')} style = {{marginLeft:35}}/>
                                <Text style = {styles.infoText}> {this.props.calories + ' Kcal'} </Text>
                                <Image source={require('../../img/ic_time.png')} style = {{ marginLeft: 20 }}/>
                                <Text style = {styles.infoText}> {this.props.time} </Text>
                                <Image source={require('../../img/ic_balance.png')} style={{ marginLeft: 20, }} />
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
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },
    insideContainer:{
        alignItems: 'flex-start', 
        flexDirection: 'row',
    },
    infoText:{
        color: '#FEFFFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 9,
        marginBottom:0
    }
});
