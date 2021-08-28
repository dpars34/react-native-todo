import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SingleTodo( {text} ) {
    return (
        <View style={styles.todoView}>
            <Text style={styles.todoText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todoView: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20
    },

    todoText: {
        fontSize: 20,
    }
})

export default SingleTodo;