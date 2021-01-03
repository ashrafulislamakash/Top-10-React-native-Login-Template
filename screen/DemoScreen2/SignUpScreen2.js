import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SignUpScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#396AFC"
        translucent={true}
      />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/logo2.png')} style={styles.logo} />
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter username"
          placeholderTextColor="#8b9cb5"
          color="#fff"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          color="#fff"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password"
          color="#fff"
          placeholderTextColor="#8b9cb5"
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Already have an account ?
            <Text style={{ color: '#3C82FF' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};
export default SignUpScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  header: {
    flex: 1,
  },

  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 3,
  },

  footer: {
    flex: 2,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
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
