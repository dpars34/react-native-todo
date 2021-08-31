import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import AiOutlineClose from 'react-icons/ai'

function SingleTodo( {text, index, deleteTodo} ) {
    return (
        <View style={styles.todoView}>
            <Text style={styles.todoText}>{text}</Text>
            <TouchableWithoutFeedback onPress={() => deleteTodo(index)}>
                <Text style={styles.cross}>{String.fromCharCode(10006)}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    todoView: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff'
    },

    todoText: {
        fontSize: 20,
    },

    cross: {
        fontSize: 20,
    }
})

export default SingleTodo;