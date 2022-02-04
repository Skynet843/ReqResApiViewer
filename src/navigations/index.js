import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import {StatusBar} from 'react-native';
import colors from '../assets/theme/colors';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
