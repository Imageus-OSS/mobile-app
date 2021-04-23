import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Image, Text, TouchableOpacity,
} from 'react-native';

function ListItem({
  // eslint-disable-next-line no-unused-vars
  title, imageURL, members, index, onPress, active,
}) {
  function renderIcon() {
    if (imageURL && imageURL !== '') {
      return (
        <Image style={styles.icon} source={{ uri: imageURL }} />
      );
    }

    return (
      <View style={styles.icon}>
        <Text style={styles.iconText}>{title[0]}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View style={styles.container}>
        {renderIcon()}
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={[styles.title, { marginBottom: 5 }, active ? { fontFamily: 'DMSans_700Bold' } : undefined]}>{title}</Text>
          <Text style={[styles.subtitle, { color: 'gray' }]}>{`${members} members`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  title: {
    fontSize: 16,
    maxWidth: 150,
    fontFamily: 'DMSans_500Medium',
  },
  subtitle: {
    fontSize: 14,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    width: 54,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(218, 236, 255)',
  },
  iconText: {
    color: '#003f7e',
    fontWeight: '600',
    fontFamily: 'DMSans_700Bold',
    fontSize: 20,
  },
});

ListItem.defaultProps = {
  imageURL: null,
  onPress: () => {},
  active: false,
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  members: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

export default ListItem;
