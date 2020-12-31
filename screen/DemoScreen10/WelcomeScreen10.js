import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeScreen10 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#3C82FF"
        translucent={true}
      />

      <View style={styles.hederSection}>
        <View style={styles.headerText}>
          <Text style={{fontSize: 30, color: '#3C82FF'}}> Welcome</Text>
          <Text> Please login or sign up to continue using our app.</Text>
        </View>

        <Image
          source={require('../../assets/bg10.png')}
          resizeMode="contain"
          style={styles.headerlogo}
        />
      </View>

      <View style={styles.footerSection}>
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

        <Text style={{textAlign: 'center'}}>or login with email</Text>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.emailSignupButton}
            onPress={() => navigation.navigate('SignUpScreen10')}>
            <Text style={{fontSize: 20, color: '#fff'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen10')}>
          <Text style={{textAlign: 'center', marginTop: 30}}>
            Already have an account ?
            <Text style={{color: '#3C82FF'}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hederSection: {
    flex: 2,
  },

  headerText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  headerlogo: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    minWidth: 300,
    minHeight: 200,
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
    width: 150,
    height: 50,
  },

  emailSignupButton: {
    backgroundColor: '#3C82FF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: 300,
    height: 50,
  },
});
