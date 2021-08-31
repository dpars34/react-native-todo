import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import SingleTodo from './SingleTodo'
import TopBar from './TopBar'

function MainScreen( { todoItems, addTodo, deleteTodo } ) {
    return (
        <SafeAreaView style={styles.mainView}>
            <TopBar addTodo={addTodo}/>

            <ScrollView style={styles.scrollView}>
                {todoItems.map((todo, index) => {
                    return(
                        <SingleTodo key={index} index={index} text={todo} deleteTodo={deleteTodo}/>
                    ) 
                })}
            </ScrollView>

        </SafeAreaView>
            
    );
}

const styles = StyleSheet.create({

    mainView: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eeebeb',
    },

    scrollView: {
        width: '100%'
    }

    
})

export default MainScreen;