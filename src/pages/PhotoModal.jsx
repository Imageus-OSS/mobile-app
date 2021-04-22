import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, StyleSheet, ScrollView, Dimensions,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import ViewPager from '@react-native-community/viewpager';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import { Feather } from '@expo/vector-icons';
import GroupsStateContext from '../contexts/GroupStateContext';
import ShareButton from '../components/main/ShareButton';

const win = Dimensions.get('window');

function PhotoModal({ route }) {
  const { images } = useContext(GroupsStateContext);
  const [currentImage, setCurrentImage] = useState(images[route.params.page]);
  const navigation = useNavigation();

  function onPan() {
    navigation.navigate('Home');
  }

  const onShare = async () => {
    try {
      Sharing.shareAsync(`${FileSystem.cacheDirectory}${currentImage.id}.jpeg`, {
      });
    } catch (error) {
      alert(error.message);
    }
  };

  function onPageScroll({ nativeEvent }) {
    setCurrentImage(images[nativeEvent.position]);
  }

  return (
    <View style={{ flex: 1 }}>
      <ViewPager
        style={styles.viewPager}
        initialPage={route.params.page ?? 0}
        onPageSelected={onPageScroll}
      >
        {images.map(photo => (
          <View style={styles.page} key={photo.URL}>
            <ScrollView
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
              maximumZoomScale={3}
              minimumZoomScale={1}
            >
              <PanGestureHandler activeOffsetY={20} onActivated={onPan}>
                <View style={styles.page}>
                  <Image resizeMode="contain" style={styles.image} source={{ uri: photo.URL }} />
                </View>
              </PanGestureHandler>

            </ScrollView>
          </View>
        ))}
      </ViewPager>
      <ShareButton onPress={onShare}>
        <Feather name="share" size={30} color="black" />
      </ShareButton>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  image: {
    height: win.height,
    width: win.width,
  },
});

PhotoModal.defaultProps = {
  route: {
    params: {
      page: 0,
    },
  },
};

PhotoModal.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.number,
    }),
  }),
};

export default PhotoModal;
