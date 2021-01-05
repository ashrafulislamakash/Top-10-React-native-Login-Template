import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignInScreen1 from './DemoScreen1/SignInScreen1';
import SignInScreen2 from './DemoScreen2/SignInScreen2';
import SignInScreen3 from './DemoScreen3/SignInScreen3';
import SignInScreen4 from './DemoScreen4/SignInScreen4';
import SignInScreen5 from './DemoScreen5/SignInScreen5';
import SignInScreen6 from './DemoScreen6/SignInScreen6';
import SignInScreen7 from './DemoScreen7/SignInScreen7';
import SignInScreen8 from './DemoScreen8/SignInScreen8';
import SignInScreen9 from './DemoScreen9/SignInScreen9';
import WelcomeScreen10 from './DemoScreen10/WelcomeScreen10';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = (navigation) => {
  return (
    <Tab.Navigator
      activeTintColor="#81B247"
      inactiveColor="#343430"
      initialRouteName="SignInScreen1"
      barStyle={{ backgroundColor: '#D506C0' }}>
      <Tab.Screen
        name="Demo1"
        component={SignInScreen1}
        options={{
          tabBarLabel: 'Demo1',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Demo2"
        component={SignInScreen2}
        options={{
          tabBarLabel: 'Demo2',
          tabBarColor: '#396AFC',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Demo3"
        component={SignInScreen3}
        options={{
          tabBarLabel: 'Demo3',
          tabBarColor: '#DEFE0A',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Demo4"
        component={SignInScreen4}
        options={{
          tabBarLabel: 'Demo4',
          tabBarColor: '#E60CA5',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Demo5"
        component={SignInScreen5}
        options={{
          tabBarLabel: 'Demo5',
          tabBarColor: '#FF0467',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Demo6"
        component={SignInScreen6}
        options={{
          tabBarLabel: 'Demo6',
          tabBarColor: '#8E24AA',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Demo7"
        component={SignInScreen7}
        options={{
          tabBarLabel: 'Demo7',
          tabBarColor: '#E268B7',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Demo8"
        component={SignInScreen8}
        options={{
          tabBarLabel: 'Demo8',
          tabBarColor: '#8300F5',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Demo9"
        component={SignInScreen9}
        options={{
          tabBarLabel: 'Demo9',
          tabBarColor: '#3CD3AD',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Demo10"
        component={WelcomeScreen10}
        options={{
          tabBarLabel: 'Demo10',
          tabBarColor: '#3C82FF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
