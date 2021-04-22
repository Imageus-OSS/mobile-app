import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

function PhotoThumbnail({ src, index }) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate({
      name: 'PhotoDetail',
      params: { page: index },
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.photo} source={{ uri: src.URL }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
  },
  photo: {
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
});

PhotoThumbnail.propTypes = {
  src: PropTypes.shape({
    URL: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PhotoThumbnail;
