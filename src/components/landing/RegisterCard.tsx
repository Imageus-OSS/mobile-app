import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import LandingCard from './LandingCard';
import Input from '../Input';
import Button from '../Button';
import LinkButton from './LinkButton';
import InputStyles from '../../styles/InputStyles';
import API from '../../api/API';
import { CardProps } from './types';

type Credentials = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};

function RegisterCard({ switchCard }: CardProps): JSX.Element {
  async function register(credentials: Credentials) {
    try {
      await API.register({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      });
    } catch (e) {
      setError(e.message);
      return;
    }

    Alert.alert(
      'Account Created',
      'Please look in your inbox for the verification email we just sent.',
      [
        {
          text: 'Got it!',
          onPress: () => switchCard('login'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  // yup validation
  const RegisterSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required').email('Please enter a valid email'),
    password: yup.string().required('Password is required')
      .min(8, 'Password needs to be at least 8 characters long')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain one uppercase, one lowercase, one number, and one special character'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match"),
  });

  const [err, setError] = useState(null);

  return (
    <LandingCard title="Register" error={err}>
      <Formik
        initialValues={{
          firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={register}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors,
        }) => (
          <View>
            <Input
              style={InputStyles.landing}
              placeholder="First name"
              onChangeText={handleChange('firstName')}
              handleBlur={handleBlur}
              value={values.firstName}
              error={errors.firstName}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Last name"
              onChangeText={handleChange('lastName')}
              handleBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Username"
              onChangeText={handleChange('username')}
              handleBlur={handleBlur}
              value={values.username}
              error={errors.username}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Email"
              onChangeText={handleChange('email')}
              handleBlur={handleBlur}
              value={values.email}
              error={errors.email}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Password"
              onChangeText={handleChange('password')}
              handleBlur={handleBlur}
              secureTextEntry
              value={values.password}
              error={errors.password}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              handleBlur={handleBlur}
              secureTextEntry
              value={values.confirmPassword}
              error={errors.confirmPassword}
            />
            <Button title="Register" onPress={handleSubmit} />
            <LinkButton title="Back To Login" onPress={() => switchCard('login')} />
          </View>
        )}
      </Formik>
    </LandingCard>
  );
}

export default RegisterCard;
