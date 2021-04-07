import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PropTypes } from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import LandingCard from './LandingCard';
import LinkButton from './LinkButton';
import InputStyles from '../../styles/InputStyles';

function LoginCard({ switchCard }) {
  const InputSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  function login(credentials) {
    console.log(credentials);
  }

  return (
    <LandingCard title="Login">
      <Formik
        validationSchema={InputSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={login}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors,
        }) => (
          <View>
            <Input
              style={InputStyles.landing}
              placeholder="Username"
              value={values.username}
              handleBlur={handleBlur}
              onChangeText={handleChange('username')}
              error={errors.username}
            />
            <Input
              style={InputStyles.landing}
              placeholder="Password"
              value={values.password}
              secureTextEntry
              handleBlur={handleBlur}
              onChangeText={handleChange('password')}
              error={errors.password}
            />
            <Button title="Login" onPress={handleSubmit} />
            <LinkButton title="Register" onPress={() => switchCard('register')} />
          </View>
        )}
      </Formik>
    </LandingCard>
  );
}

LoginCard.defaultProps = {
  switchCard: () => { },
};

LoginCard.propTypes = {
  switchCard: PropTypes.func,
};

export default LoginCard;
