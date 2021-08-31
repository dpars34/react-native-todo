import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import SplashScreen from './App/Screens/SplashScreen'
import MainScreen from './App/Screens/MainScreen'

export default function App() {

  const [splashScreenTime, setSplashScreenTime] = useState(true)
  const [todoItems, setTodoItems] = useState([])

  const addTodo = (text) => {
    setTodoItems(prevState => [...prevState, text])
  }

  const deleteTodo = (index) => {
    const newArray = [...todoItems]
    newArray.splice(index, 1)
    setTodoItems(newArray)
  }

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenTime(false)
    }, 3000)
  }, [])

  return (
    <View>
      {splashScreenTime ? <SplashScreen /> : <MainScreen todoItems={todoItems} addTodo={addTodo} deleteTodo={deleteTodo}/>}
    </View>
  );
  
}