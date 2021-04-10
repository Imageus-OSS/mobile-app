import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import LoginModal from './LandingPage';

function MainPage() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Modal
        presentationStyle="formSheet"
        animationType="slide"
        visible={isLoggedIn}
      >
        <LoginModal onLogin={() => setLoggedIn(false)} />
      </Modal>
    </View>
  );
}

export default MainPage;
