import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function AppScreen({ children, style }) {
    return <View style={styles.screen}>{ children }</View>
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
})

export default AppScreen;