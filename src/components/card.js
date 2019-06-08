import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,Button, TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements";


export default class CardComponent extends React.Component{

    changeTodayStyle(props){
        const color = props === 'today' ? { backgroundColor: '#FD3C29' }
            : { backgroundColor: '#323C47', borderWidth: 1, borderColor: '#515962' }
        return color;
    }

    changeYesterdayStyle(props) {
        const color = props === 'yesterday' ? { backgroundColor: '#19B996', marginLeft: 10, width: 65 }
            : { backgroundColor: '#323C47', marginLeft: 10, borderWidth: 1, borderColor: '#515962', width: 65 }
        return color;
    }

    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                    <View style={styles.insideContainer}>
                        {this.props.circle}
                        <View style={{ flexDirection: 'column',alignSelf: 'center'}}>
                            <Text style={styles.text}> {this.props.exercise.toUpperCase()}</Text>
                            <View style={{ flexDirection: 'row',marginTop:5}}> 
                                <Image source={require('../../img/ic_bike.png')} style = {{marginLeft:35}}/>
                                <Text style = {styles.infoText}> {this.props.calories + ' Kcal'} </Text>
                                <Image source={require('../../img/ic_time.png')} style = {{ marginLeft: 15,marginTop:2 }}/>
                                <Text style = {styles.infoText}> {this.props.time} </Text>
                                <Image source={require('../../img/ic_balance.png')} style={{ marginLeft: 15, }} />
                                <Text style = {styles.infoText}> {this.props.weight}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft:35, marginTop: 10}}>
                                <TouchableOpacity style={[styles.default,this.changeTodayStyle(this.props.buttonColor)]}>
                                    <Text style={styles.buttonText}> HOJE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.default,this.changeYesterdayStyle(this.props.buttonColor)]}>
                                    <Text style={styles.buttonText}> ONTEM</Text>
                                </TouchableOpacity>
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
        height:110
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
        marginLeft: 10
    },
    infoText:{
        color: '#FEFFFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 9,
    },
    default: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 13,
        borderRadius: 25,
    },
    buttonText: {
        color: '#FEFFFF',
        fontFamily: 'Montserrat',
        fontSize: 8,
    },
});
