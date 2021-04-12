import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function componentName({ title, initials }) {
    return (
        <View style={styles.header}>
            {/* Menu Icon */ }
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.circle}>
                <Text style={styles.circleText}> {initials}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        fontWeight: '600',
        margin: 20,
        textAlign: 'center',
        width: '100%'
    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 35/2,
        backgroundColor: '#0065FD30',
    },
    circleText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
        width: '100%',
        color: '#0148FF'
    }
});

export default componentName;