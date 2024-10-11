import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../constants';
import OnBorading from '../screens/onBoarding/OnBorading';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  //using Async storage - its like an Local storage
  const [isFirstLaunch, setisFirstLaunch] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('AlreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('AlreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      {isFirstLaunch && (
        <Stack.Screen
          name={ROUTES.ONBOARDING}
          component={OnBorading}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name={ROUTES.AUTHNAV}
        component={AuthNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default OnBoardingNavigator;
