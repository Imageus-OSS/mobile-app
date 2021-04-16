import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Navbar from '../Navbar';
import Input from '../Input';
import Button from '../Button';
import BottomButtonCard from '../BottomButtonCard';

function ImageUpload({ }) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Navbar title="ImageUs" initials="JT" />
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Upload Image</Text>
                    </View>
                    <Text style={styles.subtitle}>Image Caption</Text>
                    <Input placeholder=''></Input>
                    <View style={styles.button}>
                    <Button title="Select from library" onPress={() => Alert.alert('Select image from library')} />
                    </View>
                    <View style={styles.icon}></View>
                    {/** usual icon placeholder since I couldnt get AntDesign to work */}
                </View>
                <View>
                    <BottomButtonCard
                        TopButtonText="Upload" onPressTop={() => Alert.alert('Upload selected image')}
                        BottomButtonText="Cancel" onPressBottom={() => Alert.alert('Cancel')}
                    />
                </View>
            </View>
        </View>
    );
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
        fontSize: 30,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
    },
    subtitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        letterSpacing: 0.4,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        marginLeft: 5,
        marginBottom: 10,
    },
    icon: {
        height: 200,
        width: 200,
        backgroundColor: 'grey',
        margin: 15,
        alignSelf: 'center',
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
});

export default ImageUpload;