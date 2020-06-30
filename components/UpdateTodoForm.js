/*
import * as React from 'react';
import {Text, View, StyleSheet, Button, ScrollView, Switch, TextInput} from 'react-native';
import Constants from 'expo-constants';

const styles=StyleSheet.create(
{
	input:{padding:5, borderWidth:1, borderColor:'black',}
}
)


export default class UpdateTodoForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			todos:[],
			text:'',
		}
	}
	
	handleTodoUpdate= text =>{
		this.setState({text}) //state naya add kiya
		console.log('update todo form m text:'+ this.state.text) //idhar wala sahi h
	}
	
	onSave=()=>{
		this.props.onSubmit(this.state.text)
		console.log('onsave krke ye text'+this.state.text) //ye bhi sahi h
	} 	

	render=()=>(
		<View style={{paddingTop:40}}>
			<TextInput
			onChangeText={this.handleTodoUpdate}  
			value={this.state.text}
			style={styles.input}/>
			<Button onPress={this.onSave} title='Save'/>
		</View>
	)
}
*/