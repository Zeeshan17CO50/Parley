import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


import AppScreen from '../components/AppScreen';
import AppListItemDeleteAction from '../components/AppListItemDeleteAction';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import AppListItemSeparator from '../components/AppListItemSeparator';

function UserProfile(props) {
    return (
        <AppScreen>
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'https://picsum.photos/200'}}/>
        </View>
        <View style={styles.container1}>
            <ListItem
                backgroundColor = "yellow"
                title="Zeeshan Siddique"
                subTitle="India"
                image={require('../assets/zeeshan_pic.jpg')}
                renderRightActions = {()=> <AppListItemDeleteAction
                    onPress={()=> console.log('Delete')}
                />}/>
            <AppListItemSeparator/>
            <ListItem
                backgroundColor = "yellow"
                title="Zeeshan Siddique"
                subTitle="India"
                image={require('../assets/zeeshan_pic.jpg')}
                renderRightActions = {()=> <AppListItemDeleteAction
                    onPress={()=> console.log('Delete')}
                />}
                />
        </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0.4,
        overflow: 'hidden',
        // overflow: 'hidden',
        // borderRadius: 30,
    },
    container1:{
        flex: 0.5,
    },
    logo: {
        height: '100%',
        width: '100%',
      },
})

export default UserProfile;