import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-supermarket-logo-vegetable-and-water-png-image_6598571.png',
        }}
        style={styles.logo}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Movie App
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nip"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Nama"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Don't have an account?
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => navigation.replace('Login')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonLogin: {
    width: 300,
    height: 50,
    backgroundColor: '#f2ed46',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    color: '#000',
    fontSize: 20,
  },
  text: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#f2ed46',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Register;
