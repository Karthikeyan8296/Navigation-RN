import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import imgs from '../../constants/imgs';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const OnBorading = () => {
  const navigation = useNavigation();

  //we can create an custom dot component//
  const DotComponent = ({selected}) => {
    return (
      <View>
        <View></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace(ROUTES.AUTHNAV)}
      onDone={() => navigation.replace(ROUTES.AUTHNAV)}
      // DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#2154F5',
          image: <Image source={imgs.user} style={styles.image} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#D83440',
          image: <Image source={imgs.user} style={styles.image} />,
          title: 'Hello',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#F5BE42',
          image: <Image source={imgs.user} style={styles.image} />,
          title: 'Vannkom',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBorading;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    objectFit: 'contain',
  },
  outerCircle: {
    color: 'red',
    height: 4,
    width: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
