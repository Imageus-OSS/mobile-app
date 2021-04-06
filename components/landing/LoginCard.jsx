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
  function login() {
    switchCard('register');
  }

  const InputSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
  })

  return (
    <LandingCard title="Login">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={InputSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Input style={InputStyles.landing} placeholder="Username"
              onChangeText={props.handleChange('username')} />
            <Input style={InputStyles.landing} placeholder="Password" secureTextEntry
              onChangeText={props.handleChange('password')} />
            <Button title="Login" onPress={props.handleSubmit} />
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
