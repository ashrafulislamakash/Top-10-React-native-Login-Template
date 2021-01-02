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

const SignUpScreen8 = ({navigation}) => {
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
          <Image
            source={require('../../assets/logo8.png')}
            style={{
              width: '100%',
              resizeMode: 'contain',
              marginTop: 50,
            }}
          />
        </View>

        <View style={styles.headerText}>
          <Text> SIGN UP</Text>
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Name"
            color="#8b9cb5"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
            color="#8b9cb5"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Password"
            color="#8b9cb5"
            placeholderTextColor="#8b9cb5"
          />
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonTextStyle}>SIGN UP</Text>
        </TouchableOpacity>

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

        <View>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('HomeScreen')}>
            Existing User?
            <Text style={{color: '#50A8FE', fontSize: 18, fontWeight: 'bold'}}>
              SIGN IN
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen8;

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
    color: 'white',
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
