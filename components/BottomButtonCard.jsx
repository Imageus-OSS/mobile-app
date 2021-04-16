import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

function BottomButtonCard({ TopButtonText, BottomButtonText, onPressTop, onPressBottom }) {
    return (
        <View style={styles.buttonCard}>
            <View style={styles.button}>
                <Button title={TopButtonText} onPress={onPressTop} />
            </View>
            <View style={styles.button}>
                <Button title={BottomButtonText} onPress={onPressBottom} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonCard: {
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 2.5, // shadow does not work on iOS so I can't make it
    },
    button: {
        margin: 10,
    },
});

BottomButtonCard.Prototypes = {
    TopButtonText: PropTypes.string,
    BottomButtonCard: PropTypes.string,
    onPressTop: PropTypes.func,
    onPressBottom: PropTypes.func,
};

export default BottomButtonCard;