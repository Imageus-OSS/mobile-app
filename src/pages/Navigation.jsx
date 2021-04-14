import React from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import GroupDrawer from './GroupDrawer';
import MainPage from './MainPage';
import LoginModal from './LoginModal';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={GroupDrawer}>
      <Drawer.Screen
        name="Home"
        component={MainPage}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'ImageUs',
          headerLeft: () => (<Ionicons name="ios-reorder-three-sharp" size={36} onPress={() => navigation.toggleDrawer()} />),
        })}
      />
    </Drawer.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
        headerTitleStyle: {
          fontFamily: 'Poppins_600SemiBold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          stackPresentation: 'formSheet',
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerShown: false,
          gestureEnabled: false,
        }}
        component={LoginModal}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
