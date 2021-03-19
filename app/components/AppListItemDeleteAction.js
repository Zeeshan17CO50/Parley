import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import color from '../config/colors';

function AppListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={35}
                    color={color.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        backgroundColor: color.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default AppListItemDeleteAction;