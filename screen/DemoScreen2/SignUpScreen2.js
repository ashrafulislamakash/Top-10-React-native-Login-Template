
import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';




const SignUpScreen2 = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#292930' }}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#396AFC" translucent={true} />

            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../assets/logo2.png')}
                    style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain',
                        margin: 30,
                    }}
                />
            </View>

            <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Name"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="sentences"
                />
            </View>

            <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Email"
                    placeholderTextColor="#8b9cb5"
                />
            </View>

            <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Address"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="sentences"
                />
            </View>

            <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen2;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#396AFC',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
});
