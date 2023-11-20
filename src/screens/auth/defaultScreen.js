import React from 'react';
import { View, Pressable, Text, ImageBackground, StyleSheet } from 'react-native';
import { COLORS, ROUTES } from '../../constants';

const DefaultScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/backgroundImage.jpg')}
        style={styles.backgroundImage}
      >
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    height: 40,
    width: 120,
    marginHorizontal: 20,
    marginBottom: 60,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'white',
  },
});

export default DefaultScreen;
