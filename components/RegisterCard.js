import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';
import Input from './Input';
import Button from './Button';

const RegisterCard = () => {
    return (
        <View>
            <Text style={styles.title} > ImageUs </Text>
            <Text style={styles.tagline} > Maybe some tagline here </Text>
            <Card>
                <Text style={styles.header}> Register </Text>
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button title="Register" onPress={() => alert('Register')} />
                <Text style={styles.login} onPress={() => alert('Back to login')}> Go back to login </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 10,
    },
    header: {
        padding: 10,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    login: {
        padding: 13,
        fontSize: 15,
        color: 'blue',
        textAlign: 'center',
    }
});

export default RegisterCard;