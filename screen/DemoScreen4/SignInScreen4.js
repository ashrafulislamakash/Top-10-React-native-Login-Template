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
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignInScreen4 = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#E60CA5" translucent={true} />
            <ImageBackground source={require('../../assets/backgrounds.png')}
                style={styles.backgroundstyle}>

                <View style={styles.mainBody}>

                    <Animatable.View
                        animation="zoomIn">

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
                                <TouchableOpacity style={styles.signIn}>
                                    <LinearGradient colors={['#FF9F40', '#E60CA5']} style={styles.signIn} >
                                        <Text style={{ color: '#fff', fontSize: 20, }}>SIGN IN</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.signupTextStyle}>
                                    <Text style={{ color: '#8b9cb5' }}>Or Sign up with</Text>
                                </TouchableOpacity>

                                <View style={styles.iconViewStyle}>


                                    <View style={styles.iconStyle}>
                                        <TouchableOpacity>
                                            <LinearGradient colors={['#FF9F40', '#E60CA5']} >
                                                <MaterialCommunityIcons name="facebook" color="#fff" size={30} />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.iconStyle}>
                                        <TouchableOpacity>
                                            <LinearGradient colors={['#FF9F40', '#E60CA5']} >
                                                <AntDesign name="twitter" color="#fff" size={30} />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.iconStyle}>
                                        <TouchableOpacity>
                                            <LinearGradient colors={['#FF9F40', '#E60CA5']} >
                                                <AntDesign name="google" color="#fff" size={30} />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </Card>

                    </Animatable.View>

                    <Animatable.View
                        animation="zoomInUp">
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen4')}>
                            <Text style={{ color: '#8b9cb5', textAlign: 'center', marginTop: 30 }}>
                                Dont Have an Account?
                        <Text style={{ color: '#FF9F40' }}>
                                    Sign Up
                        </Text >
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </ImageBackground>
        </View >
    );
};

export default SignInScreen4;

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
    },

    cardStyle: {
        maxHeight: 380,
        maxWidth: 300,
        padding: 30,
        height: 380,
        width: 300,
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
    },
    SectionStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    inputStyle: {
        flex: 1,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: 'white',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#8b9cb5',
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },

    signupTextStyle: {
        marginTop: 20,
    },


    iconViewStyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,

    },

    iconStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 30,
        height: 30,

    }
});
