import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class LoginScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
                    
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image
                        source={ require('../assets/images/bg_login.jpg') }
                        style={{flex:1, height: null, width: null }}
                    />
                </View>

                <View style={{ height: height/3, justifyContent: 'center' }}>
                    <View style={ style.button }>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
});