import React from 'react';
import { View, StyleSheet, Text, Button, Pressable, Alert } from 'react-native';

function TopBar( {addTodo} ) {

    const addNewTodo = () => {
        Alert.prompt('Add New Todo Item', 'What would you like to add?', text =>addTodo(text))
    }

    return (
        <View style={styles.topBarContainer}>
            <Text style={styles.topFont}>Todo</Text>
            <Pressable style={styles.button} >
                <Button title="Add Todo" onPress={addNewTodo}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },

    topFont: {
        color: '#f7a206',
        fontSize: 30,
    },

    button: {
        alignSelf: "flex-start",
        position: 'absolute',
        top: 20,
        left: 140,
    }
})

export default TopBar;