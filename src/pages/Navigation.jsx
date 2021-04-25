import React from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import GroupDrawer from './GroupDrawer';
import MainPage from './MainPage';
import LoginModal from './LoginModal';
import PhotoModal from './PhotoModal';
import Capture from './Capture';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerTitleStyle = {
  fontSize: 18,
  fontFamily: 'Poppins_600SemiBold',
  left: 0,
  color: 'black',
};

const headerStyle = {
  shadowColor: 'transparent',
};

function MainStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle,
        headerStyle,
        headerTintColor: 'black',
      }}
      initialRouteName="Home"
      drawerContent={() => <GroupDrawer />}
    >
      <Drawer.Screen
        name="Home"
        component={MainPage}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'ImageUs',
          headerLeft: () => (<Ionicons name="ios-reorder-three-sharp" style={{ marginLeft: 20 }} size={36} onPress={() => navigation.toggleDrawer()} />),
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
      <Stack.Screen
        name="PhotoDetail"
        options={{
          cardStyle: { backgroundColor: 'white' },
          cardOverlayEnabled: true,
          headerTitleStyle: {
            ...headerStyle,
            display: 'none',
          },
          headerStyle,
          headerTintColor: 'black',
          headerBackTitle: 'ImageUs',
          headerBackTitleStyle: {
            ...headerTitleStyle,
            marginLeft: 20,
          },
        }}
        component={PhotoModal}
      />
      <Stack.Screen
        name="Capture"
        options={{
          stackPresentation: 'formSheet',
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        component={Capture}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
