import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import LoginModal from './LandingPage';

function MainPage() {
  const { isLoggedIn, setLoggedIn } = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible
      >
        <LoginModal />
      </Modal>
    </View>
  );
}

export default MainPage;
