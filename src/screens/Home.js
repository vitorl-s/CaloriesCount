import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Avatar } from "react-native-elements";
import CardComponent from '../components/Card';

const json = require('../../data.json');

export default class Home extends Component<Props> {

    renderMultipleCard(){
        const json = require('../../data.json');
        var array = json.exercices;
        return (array.map((item, index) => {
            if(item.time % 60 === 0){
                item.time = item.time / 60 + ' h'
            } else {
                item.time = item.time + ' m'
            }
                return(
                    <View key ={index} style ={{flex:1,marginHorizontal:10,marginVertical:30}}>
                        <CardComponent
                            exercise={item.name}
                            calories={item.calories}
                            weight={item.weight + ' Kg'}
                            time={item.time}
                        />
                    </View>
                )
            }))
    }
        
        render() {
            const json = require('../../data.json');
            var array = json.exercices;
            return (
            <View style= {styles.container}>
                {this.renderMultipleCard()}
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
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#323C47',
        marginTop: 10,
        borderWidth: 0,
        borderRadius: 12,
    },
    text: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        color: '#FEFFFF',
        marginBottom: 20,
    },
    insideContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    infoText: {
        marginLeft: 30,
        color: '#FEFFFF',
    }
});
