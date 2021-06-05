// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  View, StyleSheet, Image, Text,
} from 'react-native';

type AvatarProps = {
  size: number | undefined;
  uri: string;
  firstName: string;
  lastName: string;
};

function Avatar({
  size, uri, firstName, lastName,
}: AvatarProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style: any = {
    height: size,
    width: size,
    borderRadius: size ?? 0 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };
  return (
    <View style={[style, { backgroundColor: '#rgba(101,177,255,.4)' }]}>
      {
        uri
          ? <Image style={style} source={{ uri }} />
          : <Text style={[{ textTransform: 'uppercase' }, styles.textStyle]}>{firstName[0] + lastName[0]}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default Avatar;
