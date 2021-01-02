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
} from 'react-native';

const SignUpScreen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#396AFC"
        translucent={true}
      />
      <View style={styles.header}>
        <Image source={require('../../assets/logo2.png')} style={styles.logo} />
      </View>

      <View style={styles.footer}>
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
          onPress={() => navigation.navigate('SignUpScreen2')}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
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
            <Text style={{color: '#3C82FF'}}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 10,
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
