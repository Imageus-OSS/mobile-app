import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import ViewPager, { ViewPagerOnPageSelectedEvent } from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import { Feather } from '@expo/vector-icons';
import ShareButton from '../components/main/ShareButton';
import PhotoPreview from '../components/main/PhotoPreview';
import { useGroupsState } from '../hooks/group';

const win = Dimensions.get('window');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PhotoModal({ route }: { route: any}): JSX.Element {
  const { images } = useGroupsState();
  const [currentImage, setCurrentImage] = useState(images[route.params.page]);
  const navigation = useNavigation();

  function onScroll({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentOffset, zoomScale } = nativeEvent;
    if (contentOffset.y < -150 && zoomScale === 1) {
      navigation.navigate('Home');
    }
  }

  const onShare = async () => {
    try {
      await Sharing.shareAsync(`${FileSystem.cacheDirectory}${currentImage.id}.jpeg`, {
      });
    } catch (error) {
      alert(error.message);
    }
  };

  function onPageScroll({ nativeEvent }: ViewPagerOnPageSelectedEvent) {
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
              onScroll={onScroll}
              scrollEventThrottle={40}
              maximumZoomScale={3}
              minimumZoomScale={1}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.page}>
                <PhotoPreview image={photo} style={styles.image} />
              </View>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
