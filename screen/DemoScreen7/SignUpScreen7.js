import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    ImageBackground,
    Dimensions
} from 'react-native';
import { Card } from 'react-native-paper';

const SignUpScreen7 = ({ navigation }) => {

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="transparent" translucent={true} />
            <ImageBackground source={require('../../assets/bg7.png')}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                }}>

                <Image source={require('../../assets/logo.png')}
                    style={{
                        width: Dimensions.get('window').width / 3,
                        width: Dimensions.get('window').width / 3,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                    }}>
                </Image>

                <Card style={styles.cardStyle}>
                    <TextInput style={styles.inputstyle}
                        placeholder="Username"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                    />
                    <View style={{ borderBottomColor: '#eee', borderBottomWidth: 1, }} />

                    <TextInput style={styles.inputstyle}
                        secureTextEntry={true}
                        placeholder="E-mail"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                    <View style={{ borderBottomColor: '#eee', borderBottomWidth: 1, }} />
                    <TextInput style={styles.inputstyle}
                        secureTextEntry={true}
                        placeholder="Password"
                        returnKeyType={'done'}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                    <View style={{ borderBottomColor: '#eee', borderBottomWidth: 1, }} />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpScreen7')}>
                        <Text style={{ fontSize: 20, color: '#fff' }}> Sign Up</Text>
                    </TouchableOpacity>
                </Card>


                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen7')}>
                    <Text style={{ textAlign: 'center', marginTop: 60 }}>
                        Don’t have an account ?
                        <Text style={{ color: '#fff' }}>
                            Sign Up
                        </Text >
                    </Text>
                </TouchableOpacity>

            </ImageBackground>
        </KeyboardAvoidingView>
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
        margin: 5,
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 3.6,
    },

    inputstyle: {
        alignSelf: 'center',
        width: Dimensions.get('window').width / 1.5,
        height: 50,
        padding: 10,

    },

    button: {
        alignSelf: 'center',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E268B7",
        width: Dimensions.get('window').width / 3,
        height: 50,
    },

});
