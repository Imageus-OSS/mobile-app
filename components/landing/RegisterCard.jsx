import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import LandingCard from './LandingCard';
import Input from '../Input';
import Button from '../Button';
import LinkButton from './LinkButton';
import InputStyles from '../../styles/InputStyles';
import API from '../../api/API';

function RegisterCard({ switchCard }) {
  async function register(credentials) {
    console.log(credentials);

    try {
      await API.register({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        password: values.password
      });
    } catch (e) {
      setError(e.message);
      return;
    }
  }

  // yup validation
  const RegisterSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required').email('Please enter a valid email'),
    password: yup.string().required('Password is required'),
  });

  const [err, setError] = useState(null);

  return (
    <LandingCard title="Register">
      <Formik
        initialValues={{
          firstName: '', lastName: '', username: '', email: '', password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={register}
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
            <Button title="Register" onPress={handleSubmit} />
            <LinkButton title="Back To Login" onPress={() => switchCard('login')} />
          </View>
        )}
      </Formik>
    </LandingCard>
  );
}

RegisterCard.defaultProps = {
  switchCard: () => { },
};

RegisterCard.propTypes = {
  switchCard: PropTypes.func,
};

export default RegisterCard;
