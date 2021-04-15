import React from 'react';
import Prototypes from 'prop-types';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../Button';
import Navbar from '../Navbar';
import Input from '../Input';
//import InputStyles from '../../styles/InputStyles';

function JoinGroup({ }) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Navbar title='ImageUs' initials='JT' />
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Join Group</Text>
                    </View>
                    <Text style={styles.subtitle}>Group Code</Text>
                    <Input placeholder='example-code'></Input>
                    <View style={styles.icon}></View>
                    {/** usual icon placeholder since I couldnt get AntDesign to work */}
                </View>
                <View style={styles.buttonCard}>
                    <View style={styles.button}>
                        <Button title='Join Group' onPress={() => Alert.alert('Join Group')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => Alert.alert('Cancel')}/>
                    </View>
                </View>
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
    container: {
        margin: 15,
    },
    titleView: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 30,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
    },
    subtitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        marginLeft: 5,
        marginBottom: 10,
    },
    icon: {
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        margin: 80,
        alignSelf: 'center',
    },
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
})

export default JoinGroup;
