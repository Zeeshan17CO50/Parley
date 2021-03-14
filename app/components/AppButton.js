import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color="primary", width='100%'}) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color],width}]}
            onPress = {onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: '2%'
    },
    text:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    }
})

export default AppButton;