import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default function App() {
    return (
        <View style={style.container}>
            <Text style={style.welcome}> Hello to React Native! </Text>
            <Text style={style.welcome}> Uillian </Text>
        </View>
    );
}
