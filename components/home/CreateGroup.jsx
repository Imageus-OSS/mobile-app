import React from 'react';
import Prototypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';
import Navbar from '../Navbar';
import Input from '../Input';
//import InputStyles from '../../styles/InputStyles';

function CreateGroup({ }) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Navbar title='ImageUs' initials='JT' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
    },
    header: {
        top: 10,
    },
})

export default CreateGroup;
