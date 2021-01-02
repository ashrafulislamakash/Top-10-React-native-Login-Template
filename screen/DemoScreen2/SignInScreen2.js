import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';

const SignInScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#396AFC"
        translucent={true}
      />

      <View style={styles.header}>
        <Image
          source={require('../../assets/logo2.png')}
          style={styles.logo}
        />
      </View>




      <View style={styles.footer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email"
          color="#fff"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password"
          placeholderTextColor="#8b9cb5"
          color="#fff"
        />


        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignUpScreen2')}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen2')}>
          <Text style={{ textAlign: 'center', marginTop: 10, color: '#fff' }}>
            Don’t have an account ?
            <Text style={{ color: '#3C82FF', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default SignInScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  header: {
    flex: 1.2,
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

