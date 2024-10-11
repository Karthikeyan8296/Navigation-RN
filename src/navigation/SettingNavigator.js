import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {Settings, SettingsDetail} from '../screens';

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SETTINGS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
