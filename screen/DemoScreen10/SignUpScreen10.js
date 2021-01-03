import React, { useState } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Dimensions,
    SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from '@react-native-community/checkbox'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen10 = ({ navigation }) => {

    const [isSelected, setSelection] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3C82FF" translucent={true} />

            <Animatable.View animation="fadeInDownBig" style={styles.hederSection}>
                <View style={styles.headerText}>
                    <Text style={{ fontSize: 30, color: '#3C82FF' }}> Sign Up</Text>
                    <Text> Please sign up to enter in a app.</Text>
                </View>
                <Text style={{ textAlign: 'center' }}>Enter via social networks</Text>
                <View style={styles.buttonSection}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#76A9EA" }]} >
                        <MaterialCommunityIcons name="facebook" color="#fff" size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#475993" }]}>
                        <MaterialCommunityIcons name="twitter" color="#fff" size={35} />
                    </TouchableOpacity>
                </View>
            </Animatable.View>

            <Animatable.View animation="fadeInUpBig" style={styles.footerSection}>
                <View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Name"
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
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title='Click Here'
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkboxlabel}>I agree with Private Policy</Text>
                </View>

                <View style={styles.buttonSection}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}> Sign In</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={{ textAlign: 'center', marginTop: 30 }}>
                        Already have an account ?
                        <Text style={{ color: '#3C82FF', fontSize: 18, fontWeight: 'bold' }}>
                            Login
                        </Text >
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>

    );
};

export default SignUpScreen10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    hederSection: {
        flex: 1.5,
    },

    headerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.7,
        height: Dimensions.get('window').height / 13,
    },

    inputStyle: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 13,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E2E6EA',
    },

    checkboxContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },

    checkbox: {
        alignSelf: 'center',
        backgroundColor: '#E2E6EA',
    },

    checkboxlabel: {
        margin: 5,
    },

    signupButton: {
        backgroundColor: '#3C82FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 13,
    },
});
