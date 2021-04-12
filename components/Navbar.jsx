import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function componentName({ title, initials }) {
    return (
        <View style={styles.header}>
            {/** Placeholder for Menu icon */}
            <View style={styles.menu}></View>
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%'
    },
    menu: {
        height: 20,
        width: 25,
        backgroundColor: 'black',
        margin: 10
    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2,
        marginLeft: '52%',
        backgroundColor: '#0065FD30',
        alignContent: 'center',
        justifyContent: 'center'
    },
    circleText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#0148FF'
    }
});

export default componentName;