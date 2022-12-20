import React,{useState} from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from '../Component/Task';

const IndexScreen = () => {
    const [task, setTask] = useState();
    const[addIteam, setAddIteam] = useState([]);
    const addTasks = ()=>{
        Keyboard.dismiss();
      setAddIteam([...addIteam, task])
      setTask(null);
    }
    const completeTask =(index)=>{
        let itemCpmy=[...addIteam];
        itemCpmy.splice(index,1);
        setAddIteam(itemCpmy);
    }
    
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Today's Tasks</Text>
          </View>
          
          <View > 
         
           {
            addIteam.map((item, index)=>{
                return(<TouchableOpacity onPress={()=>{completeTask(index)}}>
                <Task key={index} tasks={item} />
                </TouchableOpacity>
                )
            })
           }
         
         
         
          </View>
          <KeyboardAvoidingView style={styles.wraper}> 
            <TextInput style={styles.input} placeholder='enter a task' value={task} onChangeText={newText=>setTask(newText)}></TextInput>
             <TouchableOpacity
             onPress={addTasks} style={styles.button}> 
                 <Text style={styles.add}>+</Text>
             </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E0F0F3',
        flex:1,
        paddingHorizontal:15,
    },
    wraper:{
        position:'absolute',
        bottom:30,
        maxWidth:'100%',
        flexDirection:'row'
    },

    header:{
  
        alignItems:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:25, 
        color:'#3F4749',
        marginTop:40,
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        color:'#000000',
        backgroundColor:'#ffffff',
        width:'80%',
        marginLeft:20,
        paddingHorizontal:10,
        borderRadius:10,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginHorizontal:5
    },
    add:{
        fontSize:30,
        fontWeight:'bold',

    }
})

export default IndexScreen;