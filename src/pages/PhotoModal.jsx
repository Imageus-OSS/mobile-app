import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, StyleSheet, ScrollView, Dimensions, Button,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import ViewPager from '@react-native-community/viewpager';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import GroupsStateContext from '../contexts/GroupStateContext';

const win = Dimensions.get('window');

function PhotoModal({ route }) {
  const { images } = useContext(GroupsStateContext);
  const navigation = useNavigation();

  function onPan() {
    navigation.navigate('Home');
  }

  const onShare = async () => {
    try {
      Sharing.shareAsync(images[0].URL, {
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={route.params.page ?? 0}>
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
      <Button title="hello" onPress={onShare} />
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
