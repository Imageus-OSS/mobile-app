import React, { useState } from 'react';
import { View, Modal, Button } from 'react-native';
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
      <Button title="Hello" />
    </View>
  );
}

export default MainPage;
