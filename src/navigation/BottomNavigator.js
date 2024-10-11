import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ROUTES} from '../constants';
import {Home, Notifications, Profile, Settings, Wallet} from '../screens';
import colors from '../constants/colors';
import SettingNavigator from './SettingNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      })}
      //   tabBarIconStyle: ({color, size, focused}) => {
      //     let iconName;
      //     if (route.name === ROUTES.HOME_TAB) {
      //       iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
      //     } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
      //       iconName = focused ? 'settings' : 'settings-outline';
      //     } else if (route.name === ROUTES.WALLET) {
      //       iconName = focused ? 'wallet' : 'wallet-outline';
      //     } else if (route.name === ROUTES.NOTIFICATIONS) {
      //       iconName = focused
      //         ? 'md-notifications-sharp'
      //         : 'md-notifications-outline';
      //     }
      //     return <Icon name={iconName} size={24} color={color} />;
      //   },
      // })}
    >
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{tabBarLabel: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
