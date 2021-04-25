import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import API from '../api/API';
import GroupsStateContext from '../contexts/GroupStateContext';
import UserContext from '../contexts/UserContext';

function Capture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { groups, index } = useContext(GroupsStateContext);
  const user = useContext(UserContext);
  const cameraRef = useRef(null);

  async function upload(uploadImage) {
    // console.log(uploadImage);
    const fileName = uploadImage.uri.split('/').pop();
    // console.log({
    //   name: 'test', type: 'image/jpeg', uri: uploadImage.uri, fileName,
    // });
    try {
      await API.uploadGroupImage({
        userId: user.id,
        groupId: groups[index].id,
        image: {
          name: 'test', type: 'image/jpeg', uri: uploadImage.uri, fileName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      await upload(result);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      if (Platform.OS !== 'web') {
        const photoStatus = (await ImagePicker.requestMediaLibraryPermissionsAsync()).status;
        if (photoStatus !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    // await cameraRef.current.onCameraReady();
    const val = await cameraRef.current.takePictureAsync();
    await upload(val);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={pickImage} style={styles.photoPick}>
          <FontAwesome5 name="images" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
  },
  captureButton: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    backgroundColor: '#rgba(101,177,255,.4)',
    borderWidth: 8,
    borderColor: '#0058b1',
  },
  photoPick: {
    left: 40,
    position: 'absolute',
  },
});

export default Capture;
