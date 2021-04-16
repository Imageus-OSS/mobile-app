import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../Button';
import Navbar from '../Navbar';

function NoGroupsCard({ }) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Navbar title="ImageUs" initials="JT" />
            </View>
            <View style={styles.container}>
                <Text style={styles.title} >You're Missing Out!</Text>
                {/** placeholder for icon in Figma */}
                <View>
                    <View style={styles.icon} ></View>
                </View>
                <View>
                    <Text style={styles.paragraph}>Join some groups to start sharing photos</Text>
                    <View style={styles.button}>
                        <Button title="Join Group" onPress={() => Alert.alert('Join Group!')} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Create Group" onPress={() => Alert.alert('Create Group!')} />
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
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        margin: 40,
        marginTop: '40%', //assumed the landing card for this will place it correctly
    },
    header: {
        top: 10,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        letterSpacing: 1,
    },
    paragraph: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
        alignSelf: 'center',
    },
    icon: {
        height: 40,
        width: 50,
        backgroundColor: 'grey',
        margin: 20,
        marginBottom: 40,
        alignSelf: 'center',
    },
    button: {
        margin: 5,
    },
})

export default NoGroupsCard;
