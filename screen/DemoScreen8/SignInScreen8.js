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
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const SignInScreen8 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.continer}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8300F5"
        translucent={true}
      />

      <View>
        <View style={{alignItems: 'center'}}>
          <Animatable.Image
            animation="zoomIn"
            duraton="1500"
            source={require('../../assets/logo8.png')}
            style={{
              width: '100%',
              resizeMode: 'contain',
              marginTop: 50,
            }}
          />
        </View>

        <View style={styles.headerText}>
          <Text> SIGN IN</Text>
        </View>

        <Animatable.View animation="slideInLeft" style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="E-mail"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
          />
        </Animatable.View>

        <Animatable.View animation="slideInRight" style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#8b9cb5"
          />
        </Animatable.View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SignUpScreen8')}>
          <Animatable.Text animation="zoomIn" style={styles.buttonTextStyle}>
            Sign In
          </Animatable.Text>
        </TouchableOpacity>

        <Animatable.View animation="zoomIn">
          <View style={styles.headerText}>
            <Text>OR</Text>
          </View>

          <View style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="facebook"
                  color="#50A8FE"
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <AntDesign name="twitter" color="#50A8FE" size={30} />
              </TouchableOpacity>
            </View>

            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <AntDesign name="google" color="#50A8FE" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View animation="slideInLeft">
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('SignUpScreen8')}>
            New Here ?
            <Text style={{color: '#50A8FE', fontSize: 18, fontWeight: 'bold'}}>
              Register
            </Text>
          </Text>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};
export default SignInScreen8;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  headerText: {
    alignSelf: 'center',
    margin: 10,
  },

  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    margin: 10,
    borderRadius: 25,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOpacity: 0.32,
    elevation: 6,
  },

  buttonStyle: {
    flexDirection: 'row',
    height: 50,
    margin: 10,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: '#8300F5',
    justifyContent: 'center',
    backgroundColor: '#8300F5',
    shadowOpacity: 0.32,
    elevation: 6,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  iconViewStyle: {
    flexDirection: 'row',
    margin: 20,
  },

  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 30,
    height: 30,
  },
});
