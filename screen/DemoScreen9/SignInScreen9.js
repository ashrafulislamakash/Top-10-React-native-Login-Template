import React, { useState } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    ImageBackground,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignInScreen9 = ({ navigation }) => {

    const [isSelected, setSelection] = useState(false);


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="transparent" translucent={true} />
            <View style={styles.hederSection}>

                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../assets/bg.png')}>
                    <Image
                        source={require('../../assets/livingLogo.png')}
                        style={styles.headerLogo}
                    />

                    <View style={styles.buttonSection}>

                        <TouchableOpacity style={[styles.rightbutton, { backgroundColor: "#4CB8C4" }]}>
                            <Text style={{ color: '#fff' }}>SIGN IN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.leftbutton, { backgroundColor: "#fff" }]}>
                            <Text style={{ color: '#4CB8C4' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>


            <View style={styles.footerSection}>

                <View style={styles.singingContiner}>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                            placeholderTextColor="#8b9cb5"
                        />
                    </View>

                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#8b9cb5"
                        />
                    </View>
                </View>




                <View style={styles.buttonSection}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('HomeScreen')}>
                        <LinearGradient colors={['#4CB8C4', '#3CD3AD']} style={styles.signupButton} >
                            <Text style={{ color: '#fff' }}>PROCEED</Text>
                            <MaterialIcons name="navigate-next" color="#fff" size={20} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />

                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen10')}>
                    <Text style={{ textAlign: 'center', color: '#3C82FF', marginTop: 30 }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default SignInScreen9;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    hederSection: {
        flex: 1
    },

    headerLogo: {
        flex: 1,
        height: 160,
        width: 70,
        alignSelf: 'center',
        marginTop: 50
    },

    footerSection: {
        marginTop: 50,
        flex: 2,
    },

    buttonSection: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: -20,

    },

    rightbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 15,
        borderTopStartRadius: 15,
        width: 120,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 6,
        elevation: 10,

    },
    leftbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        width: 120,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 6,
        elevation: 10,

    },

    singingContiner: {
        width: 200,
        height: 100,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 6,
        elevation: 2,

    },

    inputStyle: {
        width: 200,
        height: 50,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E2E6EA',
    },

    signupButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        width: 300,
        height: 50,
    },
});
