import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="heading" role="heading">
        Welcome to BBLTestApp
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default HomeScreen;
