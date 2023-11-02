import {StyleSheet, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text>Home!</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
