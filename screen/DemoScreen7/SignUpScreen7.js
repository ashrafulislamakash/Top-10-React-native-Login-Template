import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-paper';

const SignUpScreen7 = ({navigation}) => {
  return (
    <SafeAreaView behavior="padding" style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/bg7.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}>
        <Animatable.Image
          animation="flipInY"
          duraton="1500"
          source={require('../../assets/logo.png')}
          style={{
            width: Dimensions.get('window').width / 3,
            width: Dimensions.get('window').width / 3,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />

        <Animatable.View animation="flipInY">
          <Card style={styles.cardStyle}>
            <TextInput
              style={styles.inputstyle}
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <View style={{borderBottomColor: '#eee', borderBottomWidth: 1}} />

            <TextInput
              style={styles.inputstyle}
              placeholder="E-mail"
              returnKeyType={'done'}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <View style={{borderBottomColor: '#eee', borderBottomWidth: 1}} />
            <TextInput
              style={styles.inputstyle}
              secureTextEntry={true}
              placeholder="Password"
              returnKeyType={'done'}
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <View style={{borderBottomColor: '#eee', borderBottomWidth: 1}} />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Card>
        </Animatable.View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{textAlign: 'center', marginTop: 60}}>
            Already have an account ?
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Sign In
            </Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpScreen7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardStyle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 4,
  },

  inputstyle: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.5,
    height: 50,
    padding: 10,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E268B7',
    width: Dimensions.get('window').width / 3,
    height: 40,
  },
});
