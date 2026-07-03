import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'BBL Test App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
