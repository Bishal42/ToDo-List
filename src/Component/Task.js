import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Task = ({tasks}) => {
    return (
        <View style={styles.iteam}>
        <View style={styles.itemview}>
        <View style={styles.square}></View>
            <Text style={styles.text}> {tasks}</Text>
            </View>
            
            
            <View style={styles.circle}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    iteam:{
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:10,
        padding:5,
       
        
    },
    text:{
        margin:5,

    },
    itemview:{
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    square:{
        height:25,
        width:25,
        backgroundColor:"#8E97F0",
        borderRadius:10,
        margin:5
    },
    circle:{
        
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:2,
        borderColor:"#8E97F0",
        margin:5,
      
       
    }
})

export default Task;
