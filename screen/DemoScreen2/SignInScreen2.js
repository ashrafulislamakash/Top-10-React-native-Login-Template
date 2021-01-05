import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SignInScreen2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#396AFC"
        translucent={true}
      />

      <View>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/logo2.png')}
          style={styles.logo}
        />
      </View>

      <Animatable.View animation="fadeInUpBig">
        <TextInput
          style={styles.inputStyle}
          placeholder="E-mail"
          color="#fff"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#8b9cb5"
          color="#fff"
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignUpScreen2')}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen2')}>
          <Text style={{textAlign: 'center', marginTop: 10, color: '#fff'}}>
            Don’t have an account ?
            <Text style={{color: '#3C82FF', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};
export default SignInScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 4,
  },

  inputStyle: {
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    borderColor: '#dadae8',
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 15,
  },

  buttonStyle: {
    backgroundColor: '#396AFC',
    borderColor: '#7DE24E',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 15,
  },
});
