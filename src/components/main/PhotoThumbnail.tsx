import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';
import { Swing } from 'react-native-animated-spinkit';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

type PhotoThumbnailProps = {
  src: {
    URL: string;
  };
  index: number;
};

function PhotoThumbnail({ src, index }: PhotoThumbnailProps): JSX.Element {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  function onPress() {
    navigation.navigate({
      name: 'PhotoDetail',
      params: { page: index },
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        style={styles.photo}
        onLoad={() => setIsLoading(false)}
        source={{ uri: src.URL }}
      >
        <Swing animating={isLoading} color="#0058b1" />
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
  },
  photo: {
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

PhotoThumbnail.propTypes = {
  src: PropTypes.shape({
    URL: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PhotoThumbnail;
