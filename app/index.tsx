import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { router } from "expo-router";
import { Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { FORGOT_PASSWORD_TEXT, LOGIN_BUTTON_TEXT, SIGN_UP_TEXT } from '@/constants/Labels';



const Welcome = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = () => {
    return Font.loadAsync({
      'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Medium': require('../assets/fonts/OpenSans-Medium.ttf'),
      'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
  };
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
        }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        editable={false}
      />
      <TouchableOpacity style={styles.loginButton} onPress={()=>router.push("/home")}>
      <Text style={styles.loginButtonText}>{LOGIN_BUTTON_TEXT}</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>{FORGOT_PASSWORD_TEXT}</Text>
      <TouchableOpacity>
        <Text style={styles.signUp}>{SIGN_UP_TEXT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3897f0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3897f0',
    marginTop: 15,
  },
  signUp: {
    color: '#3897f0',
    marginTop: 30,
  },
});
