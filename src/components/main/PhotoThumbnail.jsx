import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function PhotoThumbnail({ src }) {
  return (
    <Image style={styles.photo} source={{ uri: src.URL }} />
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 100,
    borderRadius: 10,
    width: '30%',
    margin: 5,
  },
});

PhotoThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PhotoThumbnail;
