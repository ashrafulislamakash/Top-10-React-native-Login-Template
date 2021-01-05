import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#D506C0" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome back!</Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {backgroundColor: '#fff'}]}>
        <Text style={[styles.text_footer, {color: '#D506C0'}]}>Username</Text>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#FB599B" size={20} />

          <TextInput
            placeholder="Username"
            placeholderTextColor="#FB599B"
            style={[styles.textInput, {color: '#FB599B'}]}
          />

          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#FB599B" size={20} />
          </Animatable.View>
        </View>

        <Animatable.View
          animation="fadeInLeft"
          duration={500}></Animatable.View>

        <Text style={[styles.text_footer, {color: '#D506C0', marginTop: 35}]}>
          Password
        </Text>

        <View style={styles.action}>
          <Feather name="lock" color="#FB599B" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#FB599B"
            style={[styles.textInput, {color: '#FB599B'}]}
          />
          <TouchableOpacity>
            <Feather name="eye-off" color="#FB599B" size={20} />
          </TouchableOpacity>
        </View>

        <Animatable.View
          animation="fadeInLeft"
          duration={500}></Animatable.View>

        <TouchableOpacity>
          <Text style={{color: '#FB599B', marginTop: 10}}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate('SignUpScreen1')}>
            <LinearGradient
              colors={['#FF839D', '#F50B9A']}
              style={styles.signIn}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen1')}
            style={[
              styles.signIn,
              {borderColor: '#D506C0', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={{color: '#D506C0', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SignInScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D506C0',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#D506C0',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D506C0',
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
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
