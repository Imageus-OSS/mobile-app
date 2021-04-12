import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function componentName({ title }) {
    return (
        <View style={styles.header}>
            {/* Menu Icon */ }
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            {/* Profile icon right aligned */}
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
        width: '100%',
    },
});

export default componentName;