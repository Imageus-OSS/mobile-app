import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import PhotoThumbnail from './PhotoThumbnail';

function PhotoGrid({ photos }) {
  return (
    <ScrollView>
      <View style={styles.centerContainer}>
        <View style={styles.container}>
          {
            photos.map((photo, index) => (
              <PhotoThumbnail key={photo.URL} src={photo} index={index} />
            ))
        }
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

PhotoGrid.defaultProps = {
  photos: [],
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
};

export default PhotoGrid;
