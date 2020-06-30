
import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Switch, TextInput} from 'react-native';
import Constants from 'expo-constants';


/*
//needs changing

const styles=StyleSheet.create(
  {
    todoContainer:{flexDirection:'row',alignItems:'center'},
    appContainer: {paddingTop : Constants.statusBarHeight},
    fill:{flex:1, marginBottom:0},
    input:{backgroundColor:'#252525',color:'#fff',padding:5, borderWidth:1, borderColor:'black',}

  }
)

export default class Todos extends React.Component{
  
  //constructor wala hataya
   
      
 
  
  render=()=>{
    <View key={this.props.keyval}style={styles.todoContainer}>
        <Button onPress={props.delete} title='DeleteToDo'/> 
        <Text>{this.props.val.text}</Text>
        <Text>{this.props.val.date}</Text> 
    </View>
    
  }
}
*/
import styles from './Styles'
const Todos= props=>(
  <View key={props.keyval}style={styles.todoContainer}>
    <Button onPress={props.delete} title='Done'/> 
    <Text style={styles.listItems}>{props.val.text}</Text>
    <Text>{'\n'}</Text>      
    <Text style={styles.listItems}>Created On: {props.val.date} </Text> 
      </View>
  )

  export default Todos