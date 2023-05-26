import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const {replace} = useNavigation();

  setTimeout(() => {
    replace('Login');
  }, 3000);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-supermarket-logo-vegetable-and-water-png-image_6598571.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Movie Review</Text>
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
    width: 200,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
  },
});

export default SplashScreen;
