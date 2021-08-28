import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import SingleTodo from './SingleTodo'
import TopBar from './TopBar'

function MainScreen( { todoItems, addTodo } ) {
    return (
        <SafeAreaView style={styles.mainView}>
            <TopBar addTodo={addTodo}/>

            {todoItems.map((todo) => {
                return(
                    <SingleTodo text={todo} />
                ) 
            })}
        </SafeAreaView>
            
    );
}

const styles = StyleSheet.create({

    mainView: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eeebeb'
    },

    
})

export default MainScreen;