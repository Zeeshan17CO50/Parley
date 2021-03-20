import React,{ useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome,AntDesign, MaterialIcons} from '@expo/vector-icons';


import colors from '../config/colors';

function VideoCamera(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
      }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setType(
                    type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                }}>
                <MaterialIcons name="flip-camera-android" size={30} color={'white'}/>
               </TouchableOpacity>
            </View>
            <View style={styles.record_container}>
                <TouchableOpacity
                    style={styles.record_btn}
                    onPress={() => alert('record...')}>
                    <FontAwesome name="dot-circle-o" size={80} color={colors.primary}/>
                </TouchableOpacity>
            </View>
        </Camera>
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 0.1,
        marginVertical: 40,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        margin: 20,
    },
    camera: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    record_btn: {
        alignSelf: 'center',
        position: 'absolute',
        padding: 50,
    },
    record_container:{
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
    },
})

export default VideoCamera;