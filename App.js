import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Add Screeen
import SplashScreen from './screen/SplashScreen';
import SignInScreen1 from './screen/DemoScreen1/SignInScreen1';
import SignUpScreen1 from './screen/DemoScreen1/SignUpScreen1';
import SignInScreen2 from './screen/DemoScreen2/SignInScreen2';
import SignUpScreen2 from './screen/DemoScreen2/SignUpScreen2';
import SignInScreen3 from './screen/DemoScreen3/SignInScreen3';
import SignUpScreen3 from './screen/DemoScreen3/SignUpScreen3';
import SignInScreen4 from './screen/DemoScreen4/SignInScreen4';
import SignUpScreen4 from './screen/DemoScreen4/SignUpScreen4';
import SignInScreen5 from './screen/DemoScreen5/SignInScreen5';
import SignUpScreen5 from './screen/DemoScreen5/SignUpScreen5';
import SignInScreen6 from './screen/DemoScreen6/SignInScreen6';
import SignUpScreen6 from './screen/DemoScreen6/SignUpScreen6';
import SignInScreen7 from './screen/DemoScreen7/SignInScreen7';
import SignUpScreen7 from './screen/DemoScreen7/SignUpScreen7';
import SignInScreen8 from './screen/DemoScreen8/SignInScreen8';
import SignUpScreen8 from './screen/DemoScreen8/SignUpScreen8';
import SignInScreen9 from './screen/DemoScreen9/SignInScreen9';
import SignUpScreen9 from './screen/DemoScreen9/SignUpScreen9';
import WelcomeScreen10 from './screen/DemoScreen10/WelcomeScreen10';
import SignInScreen10 from './screen/DemoScreen10/SignInScreen10';
import SignUpScreen10 from './screen/DemoScreen10/SignUpScreen10';

import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignInScreen1" component={SignInScreen1} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="SignInScreen2" component={SignInScreen2} />
        <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} />
        <Stack.Screen name="SignInScreen3" component={SignInScreen3} />
        <Stack.Screen name="SignUpScreen3" component={SignUpScreen3} />
        <Stack.Screen name="SignInScreen4" component={SignInScreen4} />
        <Stack.Screen name="SignUpScreen4" component={SignUpScreen4} />
        <Stack.Screen name="SignInScreen5" component={SignInScreen5} />
        <Stack.Screen name="SignUpScreen5" component={SignUpScreen5} />
        <Stack.Screen name="SignInScreen6" component={SignInScreen6} />
        <Stack.Screen name="SignUpScreen6" component={SignUpScreen6} />
        <Stack.Screen name="SignInScreen7" component={SignInScreen7} />
        <Stack.Screen name="SignUpScreen7" component={SignUpScreen7} />
        <Stack.Screen name="SignInScreen8" component={SignInScreen8} />
        <Stack.Screen name="SignUpScreen8" component={SignUpScreen8} />
        <Stack.Screen name="SignInScreen9" component={SignInScreen9} />
        <Stack.Screen name="SignUpScreen9" component={SignUpScreen9} />
        <Stack.Screen name="WelcomeScreen10" component={WelcomeScreen10} />
        <Stack.Screen name="SignInScreen10" component={SignInScreen10} />
        <Stack.Screen name="SignUpScreen10" component={SignUpScreen10} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
