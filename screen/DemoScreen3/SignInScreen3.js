import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#DEFE0A' barStyle="dark-content" />

            <View style={styles.header}>
                {/* <Image
                    source={require('../../assets/bg.png')} /> */}

                <Text style={styles.text_header}>Welcome back!</Text>
            </View>

            <View style={styles.footer}>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#DEFE0A" size={20} />

                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#DEFE0A"
                        style={[styles.textInput, { color: "#DEFE0A" }]} />
                    <View animation="bounceIn">
                        <Feather name="check-circle" color="#DEFE0A" size={20} />
                    </View>
                </View>


                <View style={styles.action}>
                    <Feather name="lock" color="#DEFE0A" size={20} />

                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#DEFE0A"
                        style={styles.textInput} />

                    <TouchableOpacity>
                        <Feather name="eye-off" color="#DEFE0A" size={20} />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity>
                    <Text style={{ color: '#DEFE0A', marginTop: 20 }}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('Home')} >
                        <LinearGradient colors={['#DEFE0A', '#6F7F05']} style={styles.signIn} >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen3')}
                        style={[styles.signIn, { borderColor: '#DEFE0A', borderWidth: 1, marginTop: 15 }]}>
                        <Text style={[styles.textSign, { color: '#DEFE0A' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};


export default SignInScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343430'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#DEFE0A',
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#FB599B',
    },
    errorMsg: {
        color: '#D506C0',
        fontSize: 14,
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
    }
});
