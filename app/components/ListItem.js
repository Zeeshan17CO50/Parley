import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, backgroundColor='#fff', IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light} 
                onPress={onPress}>
                    <View style={[styles.container, {backgroundColor}]}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
    },
    detailsContainer:{
        justifyContent: 'center',
        marginLeft: 10,
    },
    image:{
        borderRadius: 35,
        height: 70,
        width: 70,
    },
    subTitle:{
        color: colors.gray,
    },
    title:{
        fontWeight: '500',
    },
})

export default ListItem;