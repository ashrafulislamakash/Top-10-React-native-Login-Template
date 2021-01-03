import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#DEFE0A" barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome back!</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#DEFE0A" size={20} />

          <TextInput
            placeholder="Username"
            placeholderTextColor="#DEFE0A"
            style={[styles.textInput, { color: '#DEFE0A' }]}
          />
          <View animation="bounceIn">
            <Feather name="check-circle" color="#DEFE0A" size={20} />
          </View>
        </View>

        <View style={styles.action}>
          <Feather name="lock" color="#DEFE0A" size={20} />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#DEFE0A"
            style={[styles.textInput, { color: '#DEFE0A' }]}
          />
          <TouchableOpacity>
            <Feather name="eye-off" color="#DEFE0A" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <Feather name="lock" color="#DEFE0A" size={20} />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#DEFE0A"
            style={[styles.textInput, { color: '#DEFE0A' }]}
          />
          <TouchableOpacity>
            <Feather name="eye-off" color="#DEFE0A" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ color: '#DEFE0A', marginTop: 20 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate('HomeScreen')}>
            <LinearGradient
              colors={['#DEFE0A', '#6F7F05']}
              style={styles.signIn}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={[
              styles.signIn,
              { borderColor: '#DEFE0A', borderWidth: 1, marginTop: 15 },
            ]}>
            <Text style={{ color: '#DEFE0A', fontSize: 18, fontWeight: 'bold' }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SignUpScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343430',
  },

  header: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  footer: {
    flex: 2,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 13,
  },

  text_header: {
    color: '#DEFE0A',
    fontWeight: 'bold',
    fontSize: 30,
  },

  text_footer: {
    color: '#D506C0',
    fontSize: 18,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEFE0A',
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#FB599B',
  },

  button: {
    alignItems: 'center',
    marginTop: 10,
  },

  signIn: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
