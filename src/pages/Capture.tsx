import React, {
  useState, useEffect, useRef,
} from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, ActivityIndicator, ImageBackground,
} from 'react-native';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Swing } from 'react-native-animated-spinkit';
import API from '../api/API';
import Button from '../components/Button';
import { useUserState } from '../hooks/user';
import { useGroupsState } from '../hooks/group';

function Capture(): JSX.Element {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [image, setImage] = useState<CameraCapturedPicture | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { groups, index } = useGroupsState();
  const user = useUserState();
  const [imageFlowEnabled, setImageFlowEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef<Camera>(null);

  async function upload(uploadImage: CameraCapturedPicture) {
    const fileName = uploadImage.uri.split('/').pop();
    try {
      await API.uploadGroupImage({
        userId: user.id,
        groupId: groups[index].id,
        image: {
          name: 'test', type: 'image/jpeg', uri: uploadImage.uri, fileName: fileName ?? '',
        },
      });
    } catch (error) {
      alert(error);
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
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      const photoStatus = (await ImagePicker.requestMediaLibraryPermissionsAsync()).status;
      if (photoStatus !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
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
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const val = await cameraRef.current!.takePictureAsync();
    setImage(val);

    if (!imageFlowEnabled) {
      setLoading(false);
      setModalVisible(true);
      return;
    }

    setLoading(false);
    await upload(val);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <MaterialIcons name="flip-camera-android" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.cameraOverlay}>
            <Swing animating={loading} size={40} color="white" />
          </View>
        </View>
      </Camera>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={pickImage} style={styles.photoPick}>
          <FontAwesome5 name="images" size={40} color="#0058b1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton} />
        <TouchableOpacity onPress={() => setImageFlowEnabled(!imageFlowEnabled)} style={[styles.imageFlow, imageFlowEnabled ? { backgroundColor: '#0058b1' } : {}]}>
          <Text style={[styles.imageFlowText, imageFlowEnabled ? { color: 'white' } : {}]}>FLOW</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ImageBackground source={{ uri: image ? image.uri : undefined }} style={styles.container}>
          <ActivityIndicator size="large" animating={loading} />
        </ImageBackground>
        <View style={styles.modalFooter}>
          <Button
            type="accent"
            style={styles.footerButton}
            title="Upload"
            onPress={async () => {
              setLoading(true);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              await upload(image!);
              setLoading(false);
              setModalVisible(false);
            }}
          />
          <Button
            type="accent"
            variant="danger"
            style={styles.footerButton}
            title="Cancel"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    padding: 10,
    width: '100%',
    flex: 1,
    alignSelf: 'flex-start',
  },
  camera: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  modalFooter: {
    display: 'flex',
    alignItems: 'center',
    padding: 25,
  },
  footerButton: {
    width: '90%',
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
  imageFlow: {
    position: 'absolute',
    height: 50,
    width: 80,
    borderRadius: 25,
    backgroundColor: '#rgba(101,177,255,.4)',
    right: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFlowText: {
    fontSize: 20,
    fontWeight: '600',
  },
  cameraOverlay: {
    display: 'flex',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Capture;
