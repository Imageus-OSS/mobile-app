import React from 'react';
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import GroupDrawer from './GroupDrawer';
import MainPage from './MainPage';
import LoginModal from './LoginModal';
import PhotoModal from './PhotoModal';
import Capture from './Capture';

const Stack = createNativeStackNavigator();
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
          headerLeft: function MenuButton() {
            return (
              <Ionicons name="ios-reorder-three-sharp" style={{ marginLeft: 20 }} size={36} onPress={() => navigation.toggleDrawer()} />
            );
          }
        })}
      />
    </Drawer.Navigator>
  );
}

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
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
          headerShown: false,
          gestureEnabled: false,
        }}
        component={LoginModal}
      />
      <Stack.Screen
        name="PhotoDetail"
        options={{
          contentStyle: { backgroundColor: 'white '},
          headerTintColor: 'black',
          headerBackTitle: 'ImageUs',
        }}
        component={PhotoModal}
      />
      <Stack.Screen
        name="Capture"
        options={{
          headerShown: true,
          headerTintColor: 'black',
          headerBackTitleStyle: {
            ...headerTitleStyle,
          },
        }}
        component={Capture}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
