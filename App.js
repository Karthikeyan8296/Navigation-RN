import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import OnBoardingNavigator from './src/navigation/OnBoardingNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* here we will be making conditonal auth by using Redux */}
      {/* <AuthNavigator /> */}
      <OnBoardingNavigator />
    </NavigationContainer>
  );
}

export default App;
