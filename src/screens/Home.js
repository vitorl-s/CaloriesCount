import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardComponent from '../components/Card';
import CircleImage from '../components/Circle_image';

export default class Home extends React.Component{
    renderMultipleCard(){
        const json = require('../../data.json');
        var array = json.exercices;
        var imgPath;
        return (array.map((item, index) => {
            if(item.time % 60 === 0){
                item.time = item.time / 60 + ' h'
            } else item.time = item.time + ' m'
            if (item.name === 'Yoga'){
                imgPath = require('../../img/yoga.png')
            } else if (item.name === 'Musculação'){
                imgPath = require('../../img/gym.png')
            } else if (item.name === 'Bicicleta') {
                imgPath = require('../../img/cycling.png')
            } else imgPath = require('../../img/running.png')
                return(
                    <View key ={index} style ={{flex:1,marginHorizontal:10,marginVertical:15}}>
                        <CardComponent
                            circle={<CircleImage path={imgPath}/>}
                            exercise={item.name}
                            calories={item.calories}
                            weight={' ' +item.weight + ' Kg'}
                            time={' ' + item.time} 
                            buttonColor={item.when}/>
                    </View>
                )}))
    }

    renderMultipleCirlce() {
        const json = require('../../data.json');
        var array = json.filters;
        var imgPath;
        return (array.map((item, index) => {
            if (item.name === 'Yoga') {
                imgPath = require('../../img/yoga.png')
            } else if (item.name === 'Musculação') {
                imgPath = require('../../img/gym.png')
            } else if (item.name === 'Bicicleta') {
                imgPath = require('../../img/cycling.png')
            } else imgPath = require('../../img/running.png')
            return (
                <View key={index} style={{ flex: 1, marginHorizontal: 10, marginVertical: 15 }}>
                    <Text>oi</Text>
                </View>
            )
        }))
    }
        
        render() {
            return (
            <ScrollView style= {styles.container}>
                {this.renderMultipleCard()}
            </ScrollView>
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
