import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    ImageBackground
} from 'react-native';
import { Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignInScreen8 = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00701a" translucent={true} />
            <ImageBackground source={require('../../assets/bg5.png')}
                style={styles.backgroundstyle}>

                <View style={styles.mainBody}>

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
                                placeholderTextColor="#8b9cb5"
                            />
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                                <LinearGradient
                                    colors={['#FF839D', '#F50B9A']}
                                    style={styles.signIn} >
                                    <MaterialIcons name="arrow-forward" color="#fff" size={20} />
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                    </Card>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen8')}>
                        <Text style={{ color: '#8b9cb5', textAlign: 'center', marginTop: 30 }}>
                            Dont Have an Account?
                        <Text style={{ color: '#FF9F40' }}>
                                Sign Up
                        </Text >
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SignInScreen8;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundstyle: {
        width: '100%',
        height: '100%'
    },

    mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },

    cardStyle: {
        maxHeight: 300,
        maxWidth: 300,
        padding: 30,
        height: 300,
        width: 300,
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: -5,
            height: 5,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4.46,
        elevation: 5,
    },
    SectionStyle: {
        width: 170,
        height: 35,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 30
    },

    inputStyle: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: 'white',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#8b9cb5',
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
        width: 45,
    },

    signIn: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    signupTextStyle: {
        marginBottom: 60,
    },

    iconViewStyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },

    iconStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 30,
        height: 30,
    }
});
