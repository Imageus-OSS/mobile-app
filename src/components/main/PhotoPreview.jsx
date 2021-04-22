import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, ImageBackground, ViewPropTypes } from 'react-native';

function PhotoPreview({ image, style }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ImageBackground resizeMode="contain" source={{ uri: image.URL }} onLoad={() => setIsLoading(false)} style={style}>
      <ActivityIndicator size="large" animating={isLoading} />
    </ImageBackground>
  );
}

PhotoPreview.defaultProps = {
  style: {},
};

PhotoPreview.propTypes = {
  image: PropTypes.shape({
    URL: PropTypes.string,
  }).isRequired,
  style: ViewPropTypes.style,
};
export default PhotoPreview;
