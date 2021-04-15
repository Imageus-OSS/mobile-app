import React from 'react';
import Prototypes from 'prop-types';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../Button';
import Navbar from '../Navbar';
import Input from '../Input';
//import InputStyles from '../../styles/InputStyles';

function CreateGroup({ }) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Navbar title="ImageUs" initials="JT" />
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Create Group</Text>
                    </View>
                    <Text style={styles.subtitle}>Group Name</Text>
                    <Input placeholder="Placeholder"></Input>
                    <View style={styles.privateView}>
                        <View style={styles.icon}></View>
                        <View>
                            <Text style={styles.privateText}>Private Group</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.paragraph}>Public groups can be joined through an invite link. Private groups can only be joined with an invite link after the owner grants them access.</Text>
                    </View>
                </View>
                <View style={styles.buttonCard}>
                    <View style={styles.button}>
                        <Button title="Create" onPress={() => Alert.alert('Create Group')} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={() => Alert.alert('Cancel')} />
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
    privateView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 27,
        marginBottom: 10,
    },
    icon: {
        height: 17,
        width: 17,
        backgroundColor: 'grey',
    },
    privateText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        marginLeft: 5,
    },
    paragraph: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        textAlign: 'left',
        letterSpacing: 0.4,
        lineHeight: 20,
    },
    buttonCard: {
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 230,
        elevation: 2.5, // shadow does not work on iOS so I can't make it
    },
    button: {
        margin: 10,
    },
})

export default CreateGroup;
