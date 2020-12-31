import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignInScreen10 = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#3C82FF"
        translucent={true}
      />

      <View style={styles.hederSection}>
        <View style={styles.headerText}>
          <Text style={{fontSize: 30, color: '#3C82FF'}}> Login Now</Text>
          <Text> Please login to continue using our app.</Text>
        </View>

        <Text style={{textAlign: 'center'}}>Enter via social networks</Text>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#76A9EA'}]}>
            <MaterialCommunityIcons name="facebook" color="#fff" size={35} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#475993'}]}>
            <MaterialCommunityIcons name="twitter" color="#fff" size={35} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerSection}>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="#8b9cb5"
          />
        </View>

        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#8b9cb5"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Click Here"
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxlabel}>Remember me</Text>
          <TouchableOpacity>
            <Text style={[styles.checkboxlabel, {color: '#3C82FF'}]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{fontSize: 20, color: '#fff'}}> Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen10')}>
          <Text style={{textAlign: 'center', marginTop: 30}}>
            Don’t have an account ?
            <Text style={{color: '#3C82FF'}}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hederSection: {
    flex: 2,
  },

  headerText: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto',
  },

  footerSection: {
    flex: 2,
  },

  buttonSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  button: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 150,
    height: 50,
  },

  inputStyle: {
    width: 345,
    height: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E2E6EA',
  },

  checkboxContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },

  checkbox: {
    alignSelf: 'center',
    backgroundColor: '#E2E6EA',
  },

  checkboxlabel: {
    margin: 5,
  },

  signupButton: {
    backgroundColor: '#3C82FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
    width: 300,
    height: 50,
  },
});
