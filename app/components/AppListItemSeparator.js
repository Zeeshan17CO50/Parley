import React from 'react';
import {StyleSheet, View} from 'react-native';

import color from '../config/colors';

function AppListItemSeparator(props) {
    return <View style={styles.separator}/>;
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: color.light
    }
})
export default AppListItemSeparator;