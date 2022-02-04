import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RESOURCES, USERS} from '../constants/routeName';
import {ResourcesScreen, UsersScreen} from '../screens';
import colors from '../assets/theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
          fontFamily: 'Lato-Bold',
          fontSize: 20,
        },
        headerTitleAlign: 'center',
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name={USERS}
        component={UsersScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Entypo name="users" size={28} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RESOURCES}
        component={ResourcesScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Entypo name="colours" size={28} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
