import React,{useState} from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Switch, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import Constants from 'expo-constants';

//import UpdateTodoForm from './components/UpdateTodoForm'

//import Todos from './components/Todos'

//import * as firebase from 'firebase'

//initialize firebase
/*const firebaseConfig={
  apiKey: "AIzaSyD0XQqPUgiVKEvxoeBtIuvVCMISVwAvrLg",
  authDomain: "todo-app-98078.firebaseapp.com",
  databaseURL: "https://todo-app-98078.firebaseio.com",
  projectId: "todo-app-98078",
  storageBucket: "todo-app-98078.appspot.com",

}
firebase.initializeApp(firebaseConfig)
*/
import styles from './components/Styles'
import Todos from './components/Todos'
import TodoList from './components/TodoList'


//let id=0
//update from scraps file later.
export default class App extends React.Component{
  
   constructor(props){
      super(props) 
      this.state={
        todos:[], 
        text:'',
        //showForm:false,
      }
    }
  

  deleteTodo(key){
    this.state.todos.splice(key,1)
    this.setState(
      {
        todos: this.state.todos
      }
    );
    //naya add kiya
    () => TodoList.save(this.state.todos)

  }
 
 
  handleTodoUpdate= text =>{
		this.setState({text}) 
		console.log('update todo form m text:'+ this.state.text) //idhar wala sahi h
	}

  addTodo(){
    
    if(this.state.text){
      var d=new Date()
      this.state.todos.push({
        'date':(d.getDate())+
        '/'+ (d.getMonth()+1)+
        '/'+(d.getFullYear()),
        'text':this.state.text,
      })
      this.setState({
        todos:this.state.todos
      })
      
      this.setState({
        text:''
      })
    }
    //naya add kiya
    () => TodoList.save(this.state.todos)
  }
  //naya add kiya
  componentDidMount(){ 
    TodoList.all(todos => this.setState({ todos: todos || [] }));
  }

  render(){
    //if(this.state.showForm) return <UpdateTodoForm onSubmit={this.addTodo}/>  //naya add
    
    let todo=this.state.todos.map((val,key)=>{
       return <Todos key={key} keyval={key} val={val}
        delete={()=>this.deleteTodo(key)}
      />
    })

    return(
    <View style={[styles.appContainer,styles.fill]}>
      <View style={styles.header}> 
      <Text style={styles.headerText}>ToDo List</Text>
      <Text style={styles.headerText}>Total TODOs : {this.state.todos.length} </Text>
      </View>
      <ScrollView style={styles.fill}>
        {todo}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={()=>this.addTodo()}>
         <Text style={{alignSelf:'center', fontSize:25, color:'#FFFFFF'}}>Add</Text>
      </TouchableOpacity>
      
      <TextInput  
			onChangeText={this.handleTodoUpdate}  
			value={this.state.text}
			style={styles.input} 
      placeholder='>Add a Task here'/>
    
    
    </View>
  )
  }
}
