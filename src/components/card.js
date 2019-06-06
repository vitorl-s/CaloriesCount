import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,Button } from 'react-native';
import { Card } from "react-native-elements";
import CircleImage from './circle_image';

export default class CardComponent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                    <View style={styles.insideContainer}>
                        <CircleImage/>
                        <View style={{ flexDirection: 'column',alignSelf: 'center'}}>
                            <Text style={styles.text}> testando</Text>
                            <View style={{ flexDirection: 'row'}}> 
                                <Text style = {styles.infoText}> teste</Text>
                                <Text style={styles.infoText}> teste 2</Text>
                                <Text style={styles.infoText}> teste 3</Text>
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
        marginTop: 50,
        borderWidth:0,
        borderRadius: 12,
    },
    text:{
        alignSelf: 'flex-start',
        marginLeft: 30,
        color:'#FEFFFF',
        marginBottom: 20,
    },
    insideContainer:{
        alignItems: 'flex-start', 
        flexDirection: 'row'
    },
    infoText:{
        marginLeft: 30,
        color: '#FEFFFF',
    }
});
