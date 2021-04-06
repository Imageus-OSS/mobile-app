import React from 'react';
import { View } from 'react-native';
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
      <Formik>
        <View>
          <Input style={InputStyles.landing} placeholder="First name" />
          <Input style={InputStyles.landing} placeholder="Last name" />
          <Input style={InputStyles.landing} placeholder="Username" />
          <Input style={InputStyles.landing} placeholder="Email" />
          <Input style={InputStyles.landing} placeholder="Password" />
          <Button title="Register" onPress={register} />
          <LinkButton title="Back To Login" onPress={() => switchCard('login')} />
        </View>
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
