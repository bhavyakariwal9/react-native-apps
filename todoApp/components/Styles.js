import React,{useState} from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Switch, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const styles=StyleSheet.create(
    {
      todoContainer:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        padding:10,
        marginHorizontal:1,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
      },
      listItems:{
        //flexDirection:'column',
        //alignContent:'flex-start',
        textAlign:'left',
        alignItems:'stretch',
        fontSize: 18,
        color:'#FFFFFF',
        marginHorizontal:5
      },
      addButton:{
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:70,
        backgroundColor:'#44859C',
        width:90,
        height:90,
        borderRadius:50,
        justifyContent:'center',
        elevation:8,
      },
      header:{
        //flexDirection:'column',
        backgroundColor:'#0B0A09',
        //alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:10,
        borderBottomColor:'#1F1F1F',
      },
      headerText:{
        color:'#FFFFFF', 
        fontSize:20, 
        padding:4,
      },
      appContainer: {
        paddingTop : Constants.statusBarHeight
      },
      fill:{
        flex:1, 
        marginBottom:0,
        backgroundColor:'#141414',
      },
      input:{
        backgroundColor:'#252525',
        color:'#fff',
        padding:10, 
        borderWidth:5, 
        borderColor:'black',
      },
    }
  )

  export default styles