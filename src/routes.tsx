import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
        <Screen name="Following" component={View}></Screen>
        <Screen name="Discover" component={View}></Screen>
        <Screen name="Browser" component={View}></Screen>
        <Screen name="Esports" component={View}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
