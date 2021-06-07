import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, ScrollView, RefreshControl,
} from 'react-native';
import PhotoThumbnail from './PhotoThumbnail';
import { Image } from '../../types';

type PhotoGrid = {
  photos: Image[];
  onRefresh(): void;
};

function PhotoGrid({ photos, onRefresh }: PhotoGrid): JSX.Element {
  const [refreshing, setRefreshing] = React.useState(false);

  async function refresh() {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  }

  return (
    <ScrollView
      contentInset={{
        top: 0, left: 0, bottom: 70, right: 0,
      }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    >
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
  photos: PropTypes.arrayOf(PropTypes.object),
  onRefresh: PropTypes.func.isRequired,
};

export default PhotoGrid;
