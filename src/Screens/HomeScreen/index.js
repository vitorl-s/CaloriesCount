import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import CardComponent from '../../components/Card';
import CircleImage from '../components/Circle_image';
import { Card, Header,Divider } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

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

    renderMultipleCircle() {
        const json = require('../../data.json');
        var array = json.filters;
        var imgPath;
        return (array.map((item, index) => {
            if (item.name === 'Yoga') {
                imgPath = require('../../img/ic_yoga.png')
            } else if (item.name === 'Upper Body') {
                imgPath = require('../../img/ic_upper_body.png')
            } else if (item.name === 'Lower Body') {
                imgPath = require('../../img/ic_lower_body.png')
            } else imgPath = require('../../img/ic_dance.png')
            return (
            <View key={index} style = {{marginLeft: 10,borderRadius:120}}>
                <View style = {{borderRadius:120}}>
                    <LinearGradient colors={['#7F38F4', '#F22B48']} start={{ x: 0.3, y: 0.3 }} 
                    style={styles.linearGradientContainer} end={{ x: 1, y: 1 }}>            
                        <CircleImage path={imgPath} style={styles.circleImage}
                            containerStyle={styles.circleContainer}/>
                    </LinearGradient>
                </View>
            </View>
            )
        }))
    }
        
        render() {
            return (
            <ScrollView style= {styles.container}>
                    <Header leftComponent={{ icon: 'menu-open', type: 'material-community', color: '#FEFFFF' }}
                    centerComponent={{ text: 'MEU PERFIL', style: styles.headerText}}
                    placement = {'center'}
                    rightComponent={{ icon: 'settings', type: 'feather',color: '#FEFFFF' }}
                    containerStyle={{ backgroundColor:'#232C34',flex:1,height:50,padding:35, borderBottomWidth:0}}
                    />
                    <View style={{alignSelf:'center'}}>
                        <Divider style={{ backgroundColor: '#323C47', height:2.5, width: 350}} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 15}}>
                    <Card wrapperStyle={{flexDirection:'row',height:60}} containerStyle = {styles.card}>
                        {this.renderMultipleCircle()}
                    </Card>
                </View>
                {this.renderMultipleCard()}
            </ScrollView>
        );
    }
}