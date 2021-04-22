import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync('photo');
            console.log('photo', photo);
        }
    }

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
            <Camera style={styles.camera} type={type} ref={ref => { setCameraRef(ref); }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.flip}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={takePicture}>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    flip: {
        marginTop: 20,
        flex: 0.7,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    button: {
        marginLeft: 5,
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
});


export default CameraScreen;