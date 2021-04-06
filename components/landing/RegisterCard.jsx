import React from 'react';
import { View, TextInput } from 'react-native';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import LandingCard from './LandingCard';
import Input from '../Input';
import Button from '../Button';
import LinkButton from './LinkButton';
import InputStyles from '../../styles/InputStyles';

function RegisterCard({ switchCard }) {
  function register() {
    switchCard('login');
  }

  return (
    <LandingCard title="Register">
      <Formik
        initialValues={{ firstName: '', lastName: '', username: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Input style={InputStyles.landing} placeholder="First name"
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName} />
            <Input style={InputStyles.landing} placeholder="Last name"
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName} />
            <Input style={InputStyles.landing} placeholder="Username"
              onChangeText={props.handleChange('username')}
              value={props.values.username} />
            <Input style={InputStyles.landing} placeholder="Email"
              onChangeText={props.handleChange('email')}
              value={props.values.email} />
            <Input style={InputStyles.landing} placeholder="Password"
              onChangeText={props.handleChange('password')}
              value={props.values.password} />
            <Button title="Register" onPress={props.handleSubmit} />
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
