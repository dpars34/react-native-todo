import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

function SplashScreen(props) {
    return (
        <SafeAreaView style={styles.splashArea}>
            <Text style={styles.splashText}>Todo List</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    splashArea: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeae00'
    },

    splashText: {
        color: '#eeebeb',
        fontSize: 60,
    }
})

export default SplashScreen;