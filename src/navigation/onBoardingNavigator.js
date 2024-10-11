import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../constants';
import {onBoarding} from '../screens';

const Stack = createStackNavigator();

const onBoardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.ONBOARDING} component={onBoarding} />
    </Stack.Navigator>
  );
};
export default onBoardingNavigator;
