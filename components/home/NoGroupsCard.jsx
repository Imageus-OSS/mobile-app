import React from 'react';
import Prototypes from 'prop-types';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../Button';

function NoGroupsCard({ }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >You're Missing Out!</Text>
            {/** placeholder for icon in Figma */}
            <View>
                <View style={styles.icon} ></View>
            </View>
            <View>
                <Text style={styles.paragraph}>Join some groups to start sharing photos</Text>
                <Button title="Join Group" onPress={() => Alert.alert("Join Group!")}/>
                <Button title="Create Group" onPress={() => Alert.alert("Create Group!")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        //marginTop: '40%', assumed the landing card for this will place it correctly
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
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
})

export default NoGroupsCard;
