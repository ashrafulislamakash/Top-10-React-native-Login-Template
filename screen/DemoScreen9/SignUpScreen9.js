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
import CheckBox from '@react-native-community/checkbox'

const SignUpScreen9 = ({ navigation }) => {

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

                        <TouchableOpacity style={[styles.rightbutton, { backgroundColor: "#4CB8C4" }]} onPress={() => navigation.navigate('SignInScreen9')}>
                            <Text style={{ color: '#fff' }}>SIGN IN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.leftbutton, { backgroundColor: "#fff" }]} onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={{ color: '#4CB8C4' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>


            <View style={styles.footerSection}>

                <View style={styles.cardStyle}>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Username"
                            placeholderTextColor="#8b9cb5"
                        />
                    </View>

                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email"
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

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title='Click Here'
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text style={styles.checkboxlabel}>I agree with Private Policy</Text>
                </View>

                <View style={styles.buttonSection}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('HomeScreen')}>
                        <LinearGradient colors={['#4CB8C4', '#3CD3AD']} style={styles.signupButton} >
                            <Text style={{ color: '#fff' }}>PROCEED</Text>
                            <MaterialIcons name="navigate-next" color="#fff" size={20} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
};

export default SignUpScreen9;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    hederSection: {
        flex: 1
    },

    headerLogo: {
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
        marginTop: 60,

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

    cardStyle: {
        height: 100,
        width: 240,
        alignSelf: 'center',
    },

    inputStyle: {
        width: 240,
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: '#E2E6EA',
    },

    checkboxContainer: {
        flexDirection: "row",
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 60,
    },

    checkboxlabel: {
        margin: 5
    },

    signupButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 240,
        height: 50,
    },
});
