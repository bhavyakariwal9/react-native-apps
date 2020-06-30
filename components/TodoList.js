
import React,{useState} from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Switch, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import Constants from 'expo-constants';

const TodoList = {
    convertToArrayOfObject(todos, callback) {
      return callback(
        todos ? todos.split("||").map((todos, i) => ({ key: i, text: todos })) : []
      );
    },
    convertToStringWithSeparators(todos) {
      return todos.map(todos => todos.text).join("||");
    },
    all(callback) {
      return AsyncStorage.getItem("TodoList", (err, todos) =>
        this.convertToArrayOfObject(todos, callback)
      );
    },
    save(todos) {
      AsyncStorage.setItem("TodoList", this.convertToStringWithSeparators(todos));
    }
  };

  export default TodoList