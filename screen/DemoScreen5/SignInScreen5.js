import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Card } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignInScreen5 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00701a"
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/bg5.png')}
        style={styles.backgroundstyle}>
        <View style={styles.mainBody}>
          <Animatable.View animation="bounceIn">
            <Card style={styles.cardStyle}>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Username"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#8b9cb5"
                />
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('HomeScreen')}
                  style={styles.signIn}>
                  <MaterialIcons
                    name="arrow-forward"
                    color="#fff"
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          </Animatable.View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen5')}>
            <Text
              style={{ color: '#8b9cb5', textAlign: 'center', marginTop: 30 }}>
              Dont Have an Account?
              <Text
                style={{ color: '#00701a', fontSize: 18, fontWeight: 'bold' }}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
};

export default SignInScreen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundstyle: {
    width: '100%',
    height: '100%',
  },

  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  cardStyle: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 3,
    padding: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    shadowColor: '#000',
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 5,
  },
  SectionStyle: {
    height: Dimensions.get('window').height / 20,
    alignSelf: 'center',
    marginTop: 30,
  },

  inputStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 20,
    borderColor: '#8b9cb5',
  },

  button: {
    backgroundColor: "#00701a",
    borderRadius: 50,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').height / 20,

  },

  signIn: {
    height: Dimensions.get('window').height / 20,
    color: '#00701a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
