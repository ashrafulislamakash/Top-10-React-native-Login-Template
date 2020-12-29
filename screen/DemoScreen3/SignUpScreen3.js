import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen3 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#343430' barStyle="light-content" />

            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>

            <View style={styles.footer}>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#DEFE0A" size={20} />
                    <TextInput
                        placeholderTextColor="#DEFE0A"
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <View animation="bounceIn" >
                        <Feather
                            name="check-circle"
                            color="#DEFE0A"
                            size={20} />
                    </View>
                </View>

                <View style={styles.action}>
                    <Feather name="lock" color="#DEFE0A" size={20} />

                    <TextInput
                        placeholderTextColor="#DEFE0A"
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity>
                        <Feather name="eye-off" color="#DEFE0A" size={20} />
                    </TouchableOpacity>
                </View>


                <View style={styles.action}>
                    <Feather name="lock" color="#DEFE0A" size={20} />

                    <TextInput
                        placeholderTextColor="#DEFE0A"
                        placeholder="Confirm Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity>
                        <Feather name="eye-off" color="#DEFE0A" size={20} />
                    </TouchableOpacity>

                </View>

                <View style={styles.button}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.signIn}
                        onPress={() => { }}>
                        <LinearGradient
                            colors={['#DEFE0A', '#6F7F05']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: '#343430'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.signIn, {
                            borderColor: '#DEFE0A',
                            borderWidth: 1,
                            marginTop: 15
                        }]} >
                        <Text style={[styles.textSign, { color: '#DEFE0A' }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default SignUpScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343430',
        justifyContent: 'center',

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#DEFE0A',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#D506C0',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#DEFE0A',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#FB599B',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: '#DEFE0A'
    }
});
