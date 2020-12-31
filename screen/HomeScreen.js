import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignInScreen1 from "./DemoScreen1/SignInScreen1";
import SignInScreen2 from "./DemoScreen2/SignInScreen2";
import SignInScreen3 from "./DemoScreen3/SignInScreen3";
import SignInScreen4 from "./DemoScreen4/SignInScreen4";
import SignInScreen5 from "./DemoScreen5/SignInScreen5";
import SignInScreen6 from "./DemoScreen6/SignInScreen6";
import SignInScreen7 from "./DemoScreen7/SignInScreen7";
import SignInScreen8 from "./DemoScreen8/SignInScreen8";
import SignInScreen9 from "./DemoScreen9/SignInScreen9";
import WelcomeScreen10 from "./DemoScreen10/WelcomeScreen10"

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = (navigation) => {
    return (
        <Tab.Navigator
            activeTintColor='#81B247'
            inactiveColor="#343430"
            initialRouteName="SignInScreen1"
            barStyle={{ backgroundColor: '#D506C0' }}>

            <Tab.Screen
                name="Theme1"
                component={SignInScreen1}
                options={{
                    tabBarLabel: 'Theme1',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Theme2"
                component={SignInScreen2}
                options={{
                    tabBarLabel: 'Theme2',
                    tabBarColor: "#396AFC",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Theme3"
                component={SignInScreen3}
                options={{

                    tabBarLabel: 'Theme3',
                    tabBarColor: "#DEFE0A",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Theme4"
                component={SignInScreen4}
                options={{
                    tabBarLabel: 'Theme4',
                    tabBarColor: "#E60CA5",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Theme5"
                component={SignInScreen5}
                options={{
                    tabBarLabel: 'Theme5',
                    tabBarColor: "#00701a",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Theme6"
                component={SignInScreen6}
                options={{
                    tabBarLabel: 'Theme6',
                    tabBarColor: "#8E24AA",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Theme7"
                component={SignInScreen7}
                options={{
                    tabBarLabel: 'Theme7',
                    tabBarColor: "#00701a",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            /><Tab.Screen
                name="Theme8"
                component={SignInScreen8}
                options={{
                    tabBarLabel: 'Theme8',
                    tabBarColor: "#8300F5",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Theme9"
                component={SignInScreen9}
                options={{
                    tabBarLabel: 'Theme9',
                    tabBarColor: "#00701a",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Theme10"
                component={WelcomeScreen10}
                options={{
                    tabBarLabel: 'Theme10',
                    tabBarColor: "#3C82FF",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="react" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
}

export default HomeScreen;