import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import { styles } from './Styles'
import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    function handleLogin() {
        console.log(user)

        navigation.replace('Home');
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <Image source={logo} />

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}